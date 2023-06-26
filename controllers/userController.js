const { User } = require("../models");
const bcrypt = require("bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        birth_date,
        gender,
        role,
      } = req.body;
      const user = await User.create({
        email,
        password,
        first_name,
        last_name,
        phone_number,
        birth_date,
        gender,
        role,
      });
      res.status(201).json(user);
      // console.log(user)
      // console.log(err)
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "InvalidCredential" };
      }
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        throw { name: "InvalidCredential" };
      }
      let accessToken;
      try {

      accessToken = signToken({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
      
      res.status(200).json({
        access_token: accessToken,
        email: user.email,
        role: user.role
      })


    } catch (err) {
      next(err);
    }
  }

// AUTHENTICATED ROUTES

  static async getAllUser(req, res, next) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;
      const users = await User.findAndCountAll({
        limit,
        offset
      });
      res.status(200).json(users)
    } catch(err) {
      next(err)
    }
  }
  static async getByID(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        throw { name: "UserNotFound" };
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const userId = req.params.id;
      const {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        birth_date,
        gender,
        role,
      } = req.body;
      
      const user = await User.findByPk(userId);
      if (!user) {
        throw { name: "UserNotFound" };
      }
      
      user.email = email;
      user.password = password;
      user.first_name = first_name;
      user.last_name = last_name;
      user.phone_number = phone_number;
      user.birth_date = birth_date;
      user.gender = gender;
      user.role = role;
      
      await user.save();
      
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
  
  
}




module.exports = UserController;
