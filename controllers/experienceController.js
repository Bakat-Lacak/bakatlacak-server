const { Experience } = require("../models");

class ExperienceController {
  static getAll = async (req, res, next) => {
    try {
      const { id } = req.loggedUser;
      const data = await Experience.findAll({
        where: {
          user_id: id,
        },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const experienceId = req.params.id;
      const experience = await Experience.findByPk(experienceId);
      if (!experience) {
        throw { name: "ErrorNotFound" };
      }

      const users = await experience.getUsers();

      const data = {
        experience: experience,
        users: users,
      };

      res.status(200).json(data);
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
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const { id } = req.loggedUser;
    const { department, position, industri, salary, end_date, description, country } = req.body;
    try {
      const data = await Experience.findByPk(id);
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      const [numOfRowsAffected, [updatedData]] = await Experience.update(
        {
          user_id: id,
          department: department,
          position: position,
          industry: industri,
          salary: salary,
          end_date: end_date,
          createdAt: new Date(),
          updatedAt: new Date(),
          description: description,
          country: country,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
      res.status(200).json({
        previous: {
          user_id: data.user_id,
          department: data.department,
          position: data.position,
          industry: data.industri,
          salary: data.salary,
          end_date: data.end_date,
          createdAt: Date(),
          updatedAt: Date(),
          description: data.description,
          country: data.country,
        },
        current: updatedData,
        dataUpdated: numOfRowsAffected,
      });
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Experience.findByPk(id);
      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      await Experience.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: `${data.name} Deleted` });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ExperienceController;
