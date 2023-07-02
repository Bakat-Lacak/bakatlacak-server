const { Type } = require("../models");

class TypeController {

  static async getAllTypes(req, res, next) {
    try {
      const types = await Type.findAll();
      res.status(200).json(types);
    } catch (err) {
      next(err);
    }
  };

  static async getTypeById(req, res, next) {
    try {
      const typeId = req.params.id;
      const type = await Type.findByPk(typeId);

      if (!type) {
        throw { name: "ErrorNotFound" }
      }
      res.status(200).json(type);
    } catch (err) {
      next(err);
    }
  };

  static async createType(req, res, next) {
    const { title } = req.body;

    try {
      const type = await Type.create({
        title,
      });
      res.status(200).json(type);
    } catch (err) {
      next(err);
    }
  };

  static async updateType(req, res, next) {
    const { id } = req.params;
    const { title } = req.body;

    try {
      const type = await Type.findByPk(id)
      if (!type) {
        throw { name: "ErrorNotFound" };
      }

      const [affectedRows, [updatedType]] = await Type.update(
        {
          title,
        },
        {
          where: {
            id
          },
          returning: true,
        },
      );
      res.status(200).json(updatedType);
    } catch (err) {
      next(err);
    }
  };

  static async deleteType(req, res, next) {
    const { id } = req.params;

    try {
      const type = await Type.findByPk(id);
      if (!type) {
        throw { name: "ErrorNotFound" };
      }
      await type.destroy();
      res.status(200).json({ message: `${type.title} deleted` });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = TypeController