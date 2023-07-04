const { JobListing, CompanyProfile, JobSkill, Type, JobType, Skill, User, sequelize } = require("../models");
const { Op } = require("sequelize");

class JobListingController {
  static async getJobListing(req, res, next) {
    try {
      const { locations, company_id, salary_start, page, limit, q, skill_ids, type_ids } = req.query;
      const where = {};

      //JOIN TABLES
      let joinJobSkill = {
        model: JobSkill,
        required: true
      }

      let joinSkill = {
        model: Skill,
        required: true
      }
      
      let joinCompanyProfile = {
        model: CompanyProfile,
        required: true
      }
      
      let joinType = {
        model: Type,
        required: true
      }

      //Filter by company
      if (company_id) {
        where.company_id = company_id
      }

      //Filter by search query
      if (q) {

        where[Op.or] = [
          {
            title: {
              [Op.iLike]: `%${q}%`
            }
          },
          {
            description: {
              [Op.iLike]: `%${q}%`
            }
          },
          {
            "$CompanyProfile.name$": {
              [Op.iLike]: `%${q}%`
            }
          },
          {
            "$Skills.name$": {
              [Op.iLike]: `%${q}%`
            }
          }
        ]
      }

      // Filter by skills
      if (skill_ids) {
        joinSkill.where = {
          id: {
            [Op.in]: skill_ids
          }
        }
      }

      // Filter by types
      if (type_ids) {
        joinType.where = {
          id: {
            [Op.in]: type_ids
          }
        }
      }

      // Filter by salary start
      if(salary_start) {
        where.salary_start = {
          [Op.gte]: +salary_start
        }
      }

      // Filter by location
      if (locations) {
        where.location = {
          [Op.in]: locations
        }
      }

      const include = [
        joinJobSkill,
        joinCompanyProfile,
        joinType,
        joinSkill
      ]

      const DEFAULT_PAGE = 1;
      const DEFAULT_LIMIT = 10;

      const currentPage = parseInt(page, 10) || DEFAULT_PAGE;
      const itemsPerPage = parseInt(limit, 10) || DEFAULT_LIMIT;
      const offset = (currentPage - 1) * itemsPerPage;
    
      const jobListing = await JobListing.findAndCountAll({
        where,
        include,
        subQuery: false,
        distinct : true,
        limit: itemsPerPage,
        offset,
        order: [
          ['createdAt', "DESC"]
        ]
      });

      const totalPages = Math.ceil(jobListing.count / itemsPerPage);

      res.status(200).json({
        job_listing: jobListing.rows,
        currentPage,
        totalPages,
        total: jobListing.count,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getJobListingByID(req, res, next) {
    try {
      const id = req.params.id;

      const jobListing = await JobListing.findOne({
        where: { id },
        include: [
          {
            model: Skill
          },
          {
            model: Type
          },
          {
            model: CompanyProfile,
            include: {model: User}
          },
          {
            model: JobApplication
          }

        ]
      })

      if (!jobListing) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(jobListing);
    } catch (err) {
      next(err);
    }
  }

  static async createJobListing(req, res, next) {
    const t = await sequelize.transaction()
    try {
      const {
        title,
        description,
        company_id,
        location,
        salary_start,
        salary_end,
        skill_attributes,
        type_attributes
      } = req.body;

      const { id } = req.loggedUser;

      const jobListing = await JobListing.create({
        user_id: id,
        company_id,
        title,
        description,
        location,
        salary_start,
        salary_end,
      }, {transaction: t});


      // Process Job Skills relation
      for(let i = 0; i < skill_attributes.length; i++) {
        const currentSkill = skill_attributes[i];

        const foundSkill = await Skill.findOne({
          where: {
            id: currentSkill.id
          }
        })

        if (!foundSkill) {
          throw {name: "ErrorNotFound"}
        }

        await JobSkill.create({
          job_listing_id: jobListing.id,
          skill_id: foundSkill.id
        },{transaction: t})
      }

      // Process Job Type relation
      for(let i = 0; i < type_attributes.length; i++) {
        const currentType = type_attributes[i];

        const foundType = await Type.findOne({
          where: {
            id: currentType.id
          }
        })

        if (!foundType) {
          throw {name: "ErrorNotFound"}
        }

        await JobType.create({
          type_id: foundType.id,
          job_listing_id: jobListing.id
        },{transaction: t})
      }
      
      await t.commit()
      res.status(201).json(jobListing);
    } catch (err) {
      await t.rollback()
      next(err);
    }
  }

  static async updateJobListing(req, res, next) {
    const t = await sequelize.transaction()

    try {
      const {
        title,
        description,
        company_id,
        location,
        salary_start,
        salary_end,
        type_attributes,
        skill_attributes
      } = req.body;

      const { id } = req.loggedUser;
      const idParam = req.params.id;

      const jobListing = await JobListing.findByPk(idParam);
      if (!jobListing) {
        throw { name: "ErrorNotFound" };
      }

      if (id !== jobListing.user_id) {
        throw { name: "Forbidden" };
      }

      await jobListing.update({
        user_id: id,
        company_id,
        title,
        description,
        location,
        salary_start,
        salary_end,
      }, {transaction: t});

      if(type_attributes) {
        await JobType.destroy({
          where: {
            job_listing_id: jobListing.id
          }
        }, {transaction: t})

        for(let i = 0; i < type_attributes.length; i++) {
          const currentType = type_attributes[i]

          await JobType.create({
            job_listing_id: jobListing.id,
            type_id: currentType.id
          }, {transaction: t})
        }
      }

      if(skill_attributes) {
        await JobSkill.destroy({
          where: {
            job_listing_id: jobListing.id
          }
        }, {transaction: t})

        for(let i = 0; i < skill_attributes.length; i++) {
          const currentSkill = skill_attributes[i]

          await JobSkill.create({
            job_listing_id: jobListing.id,
            skill_id: currentSkill.id
          }, {transaction: t})
        }
      }

      await t.commit()
      res.status(201).json(jobListing);
    } catch (err) {
      await t.rollback()
      next(err);
    }
  }

  static async deleteJobListing(req, res, next) {
    try {
      const { id } = req.loggedUser;
      const idParam = req.params.id;

      const jobListing = await JobListing.findByPk(idParam);
      if (!jobListing) {
        throw { name: "ErrorNotFound" };
      }

      if (id !== jobListing.user_id) {
        throw { name: "Forbidden" };
      }

      await jobListing.destroy();

      res.status(200).json(jobListing);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = JobListingController;
