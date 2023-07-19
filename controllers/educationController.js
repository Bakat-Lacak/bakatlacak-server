const { Education, UserEducation, sequelize, User } = require("../models");

class EducationController {
  static getAll = async (req, res, next) => {
    try {
      const data = await Education.findAll();

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static getByUserId = async (req, res, next) => {
    try {
      const { id } = req.loggedUser;
      const data = await UserEducation.findAll({
        where: { user_id: id },
        include: {
          model: Education,
        },
      });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static createUserEducation = async (req, res, next) => {
    try {
      const { id } = req.loggedUser;
      const { school_name, major, degree, start_date, graduation_date } = req.body;

      const findSchool = await Education.findOne({
        where: { school_name: school_name },
      });

      if (!findSchool) {
        const newSchool = await Education.create({
          school_name,
        });

        const usereduc = await UserEducation.create({
          user_id: id,
          education_id: newSchool.id,
          major,
          degree,
          start_date,
          graduation_date,
        });
        res.status(200).json({ usereduc, newSchool });
      } else {
        const usereduc = await UserEducation.create({
          user_id: id,
          education_id: findSchool.id,
          major,
          degree,
          start_date,
          graduation_date,
        });
        res.status(200).json({ usereduc, findSchool });
      }
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const { school_name, description } = req.body;
    try {
      const education = await Education.create({
        school_name,
        description,
      });

      // const userSchools = await Education.findOne({
      //   where: education.school_name
      // })
      // const newStudent = await UserEducation.create({
      //   start_date,
      //   graduation_date,
      //   education_id: userSchools.id,
      //   user_id: id,
      //   major
      // }, {transaction: t})
      res.status(201).json(education);
    } catch (err) {
      next(err);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const educationId = req.params.id;
      const education = await Education.findOne({
        where: {
          id: educationId,
        },
        include: {
          model: User,
        },
      });

      if (!education) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(education);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const idParams = req.params.id;
    const { id } = req.loggedUser;
    const { school_name, description } = req.body;
    const t = await sequelize.transaction();
    try {
      const foundEducation = await Education.findOne({
        where: {
          id: idParams,
        },
      });

      if (!foundEducation) throw { name: "ErrorNotFound" };

      await foundEducation.update(
        {
          school_name: school_name || foundEducation.school_name,
          description: description || foundEducation.description,
        },
        { transaction: t }
      );

      // if(!start_date || graduation_date){

      //   const foundUserEducation = await UserEducation.findOne({
      //     where: {
      //       user_id: id,
      //       education_id: foundEducation.id
      //     }
      //   })

      //   await foundUserEducation.update({
      //     user_id: user_id || foundUserEducation.user_id,
      //     start_date: start_date || foundUserEducation.start_date,
      //     education_id: education_id || foundUserEducation.education_id,
      //     major: major || foundUserEducation.major,
      //     graduation_date: graduation_date || foundUserEducation.graduation_date
      //   }, {transaction: t})
      // }
      await t.commit();
      res
        .status(201)
        .json({ foundEducation, message: "Education Hasbeen Updated" });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  };

  static updateNew = async (req, res, next) => {
    try {
      const { id } = req.loggedUser;
      const { school_name, major, degree, graduation_date, start_date } = req.body;

      const foundEducation = await Education.findOne({
        where: { school_name: school_name },
      });

      const newUserEducation = await UserEducation.update(
        { major, degree, graduation_date, start_date },
        { where: {user_id: id, education_id: foundEducation.id} }
        )

        res.status(200).json({message:"Data updated!",newUserEducation})
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.body;
      const findEducation = await UserEducation.findOne({
        where: { education_id: id}
      })

      const removeUserEdu = await UserEducation.destroy({
        where: { user_id : findEducation.user_id, education_id: findEducation.education_id, degree: findEducation.degree }
      })

      res.status(200).json({ message: "Education deleted!", removeUserEdu });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = EducationController;
