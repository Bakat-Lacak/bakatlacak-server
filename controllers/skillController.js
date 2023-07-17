const { Skill, UserSkill } = require("../models");

class SkillController {
  static async getAllSkills(req, res, next) {
    try {
      const skills = await Skill.findAll();
      res.status(200).json(skills);
    } catch (err) {
      next(err);
    }
  }

  static async getSkillById(req, res, next) {
    try {
      const skillId = req.params.id;
      const skill = await Skill.findByPk(skillId);

      if (!skill) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(skill);
    } catch (err) {
      next(err);
    }
  }

  static async getSkillByUserId (req,res,next) {
    try {
      const { id } = req.loggedUser
      const allSkills = await UserSkill.findAll({
        where: { user_id: id },
        include: {
          model: Skill
        }
      })

      res.status(200).json(allSkills)
    } catch(err) {
      next(err)
    }
  }

  static async addUserSkill(req, res, next) {
    // BANYAK
    try {
      const { id } = req.loggedUser
      const { name, level } = req.body

      const findSkill = await Skill.findOne({
        where: { name: name, level: level }
      })

      if (!findSkill) {
        const newSkill = await Skill.create({
          name: name,
          level: level
        })

        const userSkill = await UserSkill.create({
          user_id: id,
          skill_id: newSkill.id
        })
        res.status(200).json({userSkill, newSkill})
      } else {
        const userSkill = await UserSkill.create({
          user_id: id,
          skill_id: findSkill.id
        })
        res.status(200).json({userSkill,findSkill})
      }
    } catch (err) {
      next(err);
    }
  }

  static async createSkill(req, res, next) {
    const { name, level } = req.body;

    try {
      const skill = await Skill.create({
        name,
        level,
      });

      res.status(200).json(skill);
    } catch (err) {
      next(err);
    }
  }

  static async updateSkill(req, res, next) {
    const { id } = req.params;
    const { name, level } = req.body;

    try {
      const skill = await Skill.findByPk(id);
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
            id,
          },
          returning: true,
        }
      );
      res.status(200).json(updatedSkill);
    } catch (err) {
      next(err);
    }
  }

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
  }
}

module.exports = SkillController;
