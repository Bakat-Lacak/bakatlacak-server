const { UserProfile } = require('../models');

class UserProfileController {
    
    static async getAllUserProfile(req, res, next) {
        try {
            const userprofile = await UserProfile.findAll()
            res.status(200).json(userprofile)
        } catch (err) {
            next(err)
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
            next(err)
        }
    }
}

module.exports = UserProfileController