const { UserProfile } = require('../models');

class UserProfileController {
    
    static async getAllUserProfile(req, res, next) {
        try {
            const userprofile = await UserProfile.findAll();
            res.status(200).json(userprofile);
        } catch (err) {
            next(err);
        }
    };

    static async getUserProfileById(req, res, next) {
        try {
            const user_id = req.params.user_id;

            const userprofile = await UserProfile.findOne({
                where: {
                    user_id
                }
            });

            if (!userprofile) {
                throw { name: "ErrorNotFound" }
            }
            
            res.status(200).json(userprofile)
        } catch (err) {
            next(err);
        }
    };

    static async createUserProfile(req, res, next) {
        try {
            const { 
                user_id,
                resume,
                portofolio,
                about_me,
                salary_expectation
            } = req.body;

            const userprofile = await UserProfile.create({
                user_id,
                resume,
                portofolio,
                about_me,
                salary_expectation
            });

            res.status(201).json(userprofile);
        } catch (err) {
            next(err);
        }
    };

    static async updateUserProfile(req, res, next) {
        try {
            const user_id = req.params.user_id;

            const { 
                resume,
                portofolio,
                about_me,
                salary_expectation
            } = req.body;

            const userprofile = await UserProfile.update({
                resume,
                portofolio,
                about_me,
                salary_expectation
            }, {
                where: {
                    user_id
                }
            });

            if (!userprofile) {
                throw { name: "ErrorNotFound" }
            }

            res.status(200).json(userprofile);
        } catch (err) {
            next(err);
        }
    };

    static async deleteUserProfile(req, res, next) {
        try {
            const user_id = req.params.user_id;

            const userprofile = await UserProfile.destroy({
                where: {
                    user_id
                }
            });

            if (!userprofile) {
                throw { name: "ErrorNotFound" }
            }

            res.status(200).json({ message: "User profile has been deleted" });
        } catch (err) {
            next(err);
        }
    };

}

module.exports = UserProfileController;