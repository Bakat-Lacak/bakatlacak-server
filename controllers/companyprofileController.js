const { CompanyProfile } = require("../models");

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
      const companyProfile = await CompanyProfile.findByPk(id);
      if (!companyProfile) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(companyProfile);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const { name, field, description, location, total_employee } = req.body;

    try {
      const company = await CompanyProfile.create({
        name,
        field,
        description,
        location,
        total_employee,
      });
      res.status(200).json(company);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const { id } = req.params;
    const { name, field, description, location, total_employee } = req.body;

    try {
      const company = await CompanyProfile.findByPk(id);
      if (!company) {
        throw { name: "ErrorNotFound" };
      }
      company.name = name;
      company.field = field;
      company.description = description;
      company.location = location;
      company.total_employee = total_employee;
      await company.save();
      res.status(200).json(company);
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
