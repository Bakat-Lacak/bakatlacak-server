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
    const { department, position, industry, salary, end_date, description, country } = req.body;
    try {
      const data = await Experience.create({
        user_id: id,
        department: "Fullstack",
        position: "FrontEnd",
        industry: "Consultant",
        salary: 70000,
        end_date: Date(),
        description: "test",
        country: "Indonesia",
      });
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const { id } = req.params;
    const { department, position, industry, salary, end_date, description, country } = req.body;
    try {
      const experience = await Experience.findByPk(id);

      if (!experience) {
        return res.status(404).json({ message: "Pengalaman tidak ditemukan" });
      }

      const updatedExperience = await experience.update({
        department: department || experience.department,
        position: position || experience.position,
        industry: industry || experience.industry,
        salary: salary || experience.salary,
        end_date: end_date || experience.end_date,
        description: description || experience.description,
        country: country || experience.country,
      });

      res.status(200).json(updatedExperience);
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const experience = await Experience.findByPk(id);

      if (!experience) {
        return res.status(404).json({ message: "Pengalaman tidak ditemukan" });
      }

      await Experience.destroy({
        where: {
          id: experience.id,
        },
      });

      res.status(200).json({ message: "Experience berhasil dihapus" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ExperienceController;
