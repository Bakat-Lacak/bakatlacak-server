const { JobListing, CompanyProfile } = require("../models");
const { Op } = require("sequelize");

class JobListingController {
  static async getJobListing(req, res, next) {
    try {
      const { location, title, company_name, page, limit } = req.query;
      const where = {};

      if (location) {
        where.location = { [Op.like]: `%${location}%` };
      }

      if (title) {
        where.title = { [Op.like]: `%${title}%` };
      }

      if (company_name) {
        const targetName = await CompanyProfile.findOne({
          where: { name: company_name },
        });

        if (targetName) {
          where.company_id = targetName.id;
        }
      }

      const DEFAULT_PAGE = 1;
      const DEFAULT_LIMIT = 10;

      const currentPage = parseInt(page, 10) || DEFAULT_PAGE;
      const itemsPerPage = parseInt(limit, 10) || DEFAULT_LIMIT;
      const offset = (currentPage - 1) * itemsPerPage;

      const jobListing = await JobListing.findAndCountAll({
        include: [
          {
            model: CompanyProfile,
            attributes: [
              "id",
              "name",
              "field",
              "description",
              "location",
              "total_employee",
            ],
          },
        ],
        attributes: [
          "id",
          "user_id",
          "title",
          "description",
          "location",
          "salary_start",
          "salary_end",
        ],
        where,
        limit: itemsPerPage,
        offset,
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

      const jobListing = await JobListing.findByPk(id, {
        attributes: [
          "id",
          "user_id",
          "title",
          "description",
          "location",
          "salary_start",
          "salary_end",
        ],
      });

      if (!jobListing) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(jobListing);
    } catch (err) {
      next(err);
    }
  }

  static async createJobListing(req, res, next) {
    try {
      const {
        title,
        description,
        company_id,
        location,
        salary_start,
        salary_end,
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
      });

      res.status(201).json(jobListing);
    } catch (err) {
      next(err);
    }
  }

  static async updateJobListing(req, res, next) {
    try {
      const {
        title,
        description,
        company_id,
        location,
        salary_start,
        salary_end,
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
      });

      res.status(201).json(jobListing);
    } catch (err) {
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
