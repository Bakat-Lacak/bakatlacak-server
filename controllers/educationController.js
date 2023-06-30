const { Education } = require("../models");

class EducationController {
  static getAll = async (req, res, next) => {
    try {
      const data = await Education.findAll({});
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const { id } = req.loggedUser;
    const { start_date, graduation_date, major, school_name } = req.body;
    try {
      const data = await Education.create({
        school_name,
        user_id: id,
        start_date,
        graduation_date,
        major,
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const educationId = req.params.id;
      const education = await Education.findByPk(educationId);
      if (!education) {
        throw { name: "ErrorNotFound" };
      }

      const users = await education.getUsers();

      const data = {
        education: education,
        users: users,
      };

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const { id } = req.params;
    const { user_id, start_date, graduation_date, major } = req.body;
    try {
      const data = await Education.findByPk(id);
      if (!data) throw { name: "ErrorNotFound" };
      const [numOfRowsAffected, [updatedData]] = await Education.update(
        {
          user_id: user_id,
          start_date: start_date,
          graduation_date: graduation_date,
          major: major,
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
          start_date: data.start_date,
          graduation_date: data.graduation_date,
          major: data.major,
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
      const data = await Education.findByPk(id);
      if (!data) throw { name: "ErrorNotFound" };
      await Education.destroy({
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

module.exports = EducationController;
