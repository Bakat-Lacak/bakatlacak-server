const { Education, UserEducation, sequelize, User } = require("../models");

class EducationController {
  static getAll = async (req, res, next) => {
    try {
     const {id} = req.loggedUser
      const data = await Education.findAll({
        include: {
          model: UserEducation
        }
      });

      res.status(200).json(data)
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const { id } = req.loggedUser;
    const { start_date, graduation_date, major, school_name } = req.body;
    const t = await sequelize.transaction();
    try {

      const education = await Education.create({
        school_name,
        major,
      }, {transaction: t})

      await UserEducation.create({
        start_date,
        graduation_date,
        education_id: education.id,
        user_id: id
      }, {transaction: t})

     await t.commit();
     res.status(201).json(education);
    } catch (err) {
      await t.rollback();
      next(err);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const educationId = req.params.id;
      const education = await Education.findOne({
        where: {
          id: educationId
        },
        include: {
          model: User
        }
      })

      if (!education) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(education);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const idParams = req.params.id
    const {id} = re.loggedUser
    const { school_name, start_date, graduation_date, major } = req.body;
    const t = await sequelize.transaction();
    try {
     const foundEducation = await Education.findOne({
      where: {
        id: idParams
      }
     })

    if(!foundEducation) throw { name: "ErrorNotFound"} 
     
      await foundEducation.update ({
        school_name: school_name || foundEducation.school_name,
        major: major || foundEducation.major
      }, {transaction: t})
    
      if(!start_date || graduation_date){

        const foundUserEducation = await UserEducation.findOne({
          where: {
            user_id: id,
            education_id: foundEducation.id
          }
        })

        await foundUserEducation.update({
          start_date: start_date || foundUserEducation.start_date,
          graduation_date: graduation_date || foundUserEducation.graduation_date
        }, {transaction: t})
      }
      await t.commit();
      res.status(201).json({message: "Updated Education Successfully"});
    } catch (err) {
      await t.rollback();
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const experience = await Education.findByPk(id);

      if (!education) {
        return res.status(404).json({ message: "Not Found" });
      }

      await Education.destroy({
        where: {
          id: education.id,
        },
      });

      res.status(200).json({ message: "Deleted Successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = EducationController;
