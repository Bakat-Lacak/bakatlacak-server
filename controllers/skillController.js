const { Skill, UserSkill } = require("../models");

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

  static async addSkill(req, res, next) {
    try {
      const { id } = req.loggedUser;
      const { skill_id } = req.body;

      const skill = await Skill.findOne(
        {
          where: {
            id: skill_id
          }
        });

        if (!skill) {
          throw { name: "ErrorNotFound" }
        }

        await UserSkill.create({
          user_id: id,
          skill_id
        });

        res.status(200).json({ message: "Skill added successfully" })
    } catch (err) {
      next(err);
    }
  };

  static async createSkill(req, res, next) {
    const { id } = req.loggedUser;
    const { name, level } = req.body;

    try {
      const skill = await Skill.create({
        name,
        level,
      });

      await UserSkill.create({
        user_id: id,
        skill_id
      });

      res.status(200).json(skill);
    } catch (err) {
      next(err);
    }
  };

  static async updateSkill(req, res, next) {
    const { id } = req.params;
    const { name, level } = req.body;

    try {
      const skill = await Skill.findByPk(id)
      if (!skill) {
        throw { name: "ErrorNotFound" };
      }

      const updatedSkill = await Skill.update(
        {
          name,
          level,
        },
        {
          where: {
            id
          },
          returning: true,
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