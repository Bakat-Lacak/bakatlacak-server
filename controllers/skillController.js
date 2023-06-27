const { Skill } = require("../models");

class SkillController {

  static async getAllSkills(req, res, next) {
    try {
      const skills = await Skill.findAll();
      res.status(200).json(skills);
    } catch (err) {
      next(err);
    }
  };

  static async getSkillById(req, res, next) {
    try {
      const skillId = req.params.id;
      const skill = await Skill.findByPk(skillId);

      if (!skill) {
        throw { name: "ErrorNotFound" }
      }
      res.status(200).json(skill);
    } catch (err) {
      next(err);
    }
  };

  static async createSkill(req, res, next) {
    const { name, level, user_id } = req.body;

    try {
      const skill = await Skill.create({
        name,
        level,
        user_id,
      });
      res.status(200).json(skill);
    } catch (err) {
      next(err);
    }
  };

  static async updateSkill(req, res, next) {
    const { id } = req.params;
    const { name, level, user_id } = req.body;

    try {
      const skill = await Skill.findByPk(id)
      if (!skill) {
        throw { name: "ErrorNotFound" };
      }

      const updatedSkill = await Skill.update(
        {
          name,
          level,
          user_id,
        },
        {
          where: {
            id
          }
        }
      );
      res.status(200).json(updatedSkill);
    } catch (err) {
      next(err);
    }
  };

  static async deleteSkill(req, res, next) {
    const { id } = req.params;

    try {
      const skill = await Skill.findByPk(id);
      if (!skill) {
        throw { name: "ErrorNotFound" };
      }
      await skill.destroy();
      res.status(200).json({ message: `${skill.name} deleted` });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = SkillController