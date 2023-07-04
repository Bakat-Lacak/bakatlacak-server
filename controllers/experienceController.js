const { Experience, User } = require("../models");

class ExperienceController {
  static getAll = async (req, res, next) => {
    try {
      const { id } = req.loggedUser;
      const data = await Experience.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const experienceId = req.params.id;
      const experience = await Experience.findOne({
        where: {
          id: experienceId,
        },
        include: {
          model: User
        }
      });

      if (!experience) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(experience);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const { id } = req.loggedUser;
    const { 
      company, 
      department,
      position,
      industry,
      salary,
      start_date,
      end_date,
      description,
      country,
      state,
      city
    } = req.body;

    try {
      const data = await Experience.create({
        user_id: id,
        company,
        department,
        position,
        industry,
        salary,
        start_date,
        end_date,
        description,
        country,
        state,
        city
      });
      res.status(201).json({message: "Experience added", data});
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const { id } = req.params;
    const { 
      company, 
      department,
      position,
      industry,
      salary,
      start_date,
      end_date,
      description,
      country,
      state,
      city
    } = req.body;

    try {
      const experience = await Experience.findByPk(id);

      if (!experience) {
        throw { name: "ErrorNotFound" };
      }

      const updatedExperience = await experience.update({
        company: company || experience.company,
        department: department || experience.department,
        position: position || experience.position,
        industry: industry || experience.industry,
        salary: salary || experience.salary,
        start_date: start_date || experience.start_date,
        end_date: end_date || experience.end_date,
        description: description || experience.description,
        country: country || experience.country,
        state: state || experience.state,
        city: city || experience.city
      });

      res.status(200).json({message: "Experience updated", updatedExperience});
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const experience = await Experience.findByPk(id);

      if (!experience) {
        throw { name: "ErrorNotFound" };
      }

      await Experience.destroy({
        where: {
          id: experience.id,
        },
      });

      res.status(200).json({ message: "Experience deleted" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ExperienceController;
