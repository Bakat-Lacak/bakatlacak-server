const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      throw { name: "Unauthenticated" };
    }
    const data = verifyToken(token);
    const { email } = data;
    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) {
      throw { name: "UserNotFound" };
    } else {
      req.loggedUser = {
        id: foundUser.id,
        email: foundUser.email,
        first_name: foundUser.first_name,
        last_name: foundUser.last_name,
        phone_number: foundUser.phone_number,
        role: foundUser.role,
      };
      next();
    }
  } catch (err) {
    next(err);
  }
}

const authorization = (roles) => {
  return async (req, res, next) => {
    try {
      const { role } = req.loggedUser;

      if (!roles.includes(role)) {
        throw { name: "Forbidden" };
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  authentication,
  authorization,
};
