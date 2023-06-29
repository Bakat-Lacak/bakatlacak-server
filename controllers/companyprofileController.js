const { CompanyProfile, UserCompany, User, sequelize } = require("../models");

class CompanyProfileController {
  static getAll = async (req, res, next) => {
    try {
      const data = await CompanyProfile.findAll({});
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static getById = async (req, res, next) => {
    const { id } = req.params;

    try {
      const companyProfile = await CompanyProfile.findOne({
        where: {
          id,
        },
        include: {
          model: User,
        },
      });

      if (!companyProfile) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(companyProfile);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const { id } = req.loggedUser;
    const { name, field, description, location, total_employee } = req.body;

    const t = await sequelize.transaction();
    try {
      const company = await CompanyProfile.create(
        {
          name,
          field,
          description,
          location,
          total_employee,
        },
        { transaction: t }
      );

      await UserCompany.create(
        {
          user_id: id,
          company_id: company.id,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json(company);
    } catch (err) {
      await t.rollback()
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const { id } = req.params;
    const user = req.loggedUser;

    const { name, field, description, location, total_employee } = req.body;

    try {
      const company = await CompanyProfile.findOne({
        where: {
          id,
        },
        include: {
          model: User,
        },
      });

      if (!company) {
        throw { name: "ErrorNotFound" };
      }

      let companyUsers = company.Users;

      for (let i = 0; i < companyUsers.length; i++) {
        let currentUser = companyUsers[i];

        if (currentUser.id === user.id) {
          company.name = name;
          company.field = field;
          company.description = description;
          company.location = location;
          company.total_employee = total_employee;
          await company.save();
          res.status(200).json(company);
          break;
        }
      }
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const { id } = req.params;

    try {
      const company = await CompanyProfile.findByPk(id);
      if (!company) {
        throw { name: "ErrorNotFound" };
      }
      await company.destroy();
      res.status(200).json({ message: `${company.name} has been deleted` });
    } catch (error) {
      console.error(err);
      next(err);
    }
  };
}

module.exports = CompanyProfileController;
