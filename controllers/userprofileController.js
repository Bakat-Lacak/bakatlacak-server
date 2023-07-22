const { UserProfile } = require('../models');
const path = require('path');
const fs = require('fs');

const APP_HOSTNAME = process.env.APP_HOST + ':' + process.env.PORT + '/' || "http://localhost:7000";
const app_path = path.resolve(__dirname, '../')

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
            const {user_id} = req.params;

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
            const { id } = req.loggedUser
            
            const { 
                about_me,
                salary_expectation
            } = req.body;

            let resumeFilePath;
            let portofolioFilePath;
            let relativeResumeFilePath;
            let relativePortofolioFilePath;
            let resumeFileLink;
            let portofolioFileLink;
            let resumeStaticLink;
            let portofolioStaticLink;

            let resumeFile = req.files.resume;
            let portofolioFile = req.files.portofolio;

            if(resumeFile !== undefined){
                resumeFile = req.files.resume[0];
                resumeFilePath = resumeFile.path;
                relativeResumeFilePath = path.relative(process.cwd(), resumeFilePath);
                resumeFileLink = relativeResumeFilePath.replace(/\\/g, '/');
                resumeStaticLink = APP_HOSTNAME + resumeFileLink;
            }

            if(portofolioFile !== undefined){
                portofolioFile = req.files.portofolio[0];
                portofolioFilePath = portofolioFile.path;
                relativePortofolioFilePath = path.relative(process.cwd(), portofolioFilePath);
                portofolioFileLink = relativePortofolioFilePath.replace(/\\/g, '/');
                portofolioStaticLink = APP_HOSTNAME + portofolioFileLink;
            }

            const profileExist = await UserProfile.findOne({
                where: {
                    user_id: id
                }
            });

            if (profileExist) {
                throw { name: "ErrorAlreadyExist" }
            }

            const userprofile = await UserProfile.create({
                user_id: id,
                ...(resumeFileLink !== undefined && { resume: resumeStaticLink }),
                ...(portofolioFileLink !== undefined && { portofolio: portofolioStaticLink }),
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
            const { id } = req.loggedUser

            const user = await UserProfile.findOne({
                where: {
                    user_id: id
                }
            });

            const { 
                resume,
                portofolio,
                about_me,
                salary_expectation
            } = req.body;

            // const file = req.file;
            let resumeFile = req.files.resume;
            let portofolioFile = req.files.portofolio;

            let resumeFilePath;
            let portofolioFilePath;
            let relativeResumeFilePath;
            let relativePortofolioFilePath;
            let resumeFileLink;
            let portofolioFileLink;
            let resumeStaticLink;
            let portofolioStaticLink;

            if(resumeFile !== undefined){
                resumeFile = req.files.resume[0];
                resumeFilePath = resumeFile.path;
                relativeResumeFilePath = path.relative(process.cwd(), resumeFilePath);
                resumeFileLink = relativeResumeFilePath.replace(/\\/g, '/');
                resumeStaticLink = APP_HOSTNAME + resumeFileLink;
            }
            
            if(portofolioFile !== undefined){
                portofolioFile = req.files.portofolio[0];
                portofolioFilePath = portofolioFile.path;
                relativePortofolioFilePath = path.relative(process.cwd(), portofolioFilePath);
                portofolioFileLink = relativePortofolioFilePath.replace(/\\/g, '/');
                portofolioStaticLink = APP_HOSTNAME + portofolioFileLink;
            }

            // check if resume or portofolio from query is not empty
            // if not empty, delete the old file with fs.unlinkSync
            // then update the new file
            // dont forget to remove the url name so the unlinkSync would refer to the old file
            if(user.resume !== null && resumeFileLink !== undefined){
                let fullUrl = user.resume;
                let baseUrl = APP_HOSTNAME;
                let fileUrl = `/${fullUrl.split(baseUrl)[1]}`;
                let projectUrl = fileUrl.replace(/\\/g, '/');

                fs.unlinkSync(app_path+projectUrl);
            }

            if(user.portofolio !== null && portofolioFileLink !== undefined){
                let fullUrl = user.portofolio;
                let baseUrl = APP_HOSTNAME;
                let fileUrl = `/${fullUrl.split(baseUrl)[1]}`;
                let projectUrl = fileUrl.replace(/\\/g, '/');

                fs.unlinkSync(app_path+projectUrl);
            }

            const userprofile = await UserProfile.update({
                ...(resumeFileLink !== undefined && { resume: resumeStaticLink }),
                ...(portofolioFileLink !== undefined && { portofolio: portofolioStaticLink }),
                about_me,
                salary_expectation
            }, {
                where: {
                    user_id: id
                }
            });

            if (!userprofile) {
                throw { name: "ErrorNotFound" }
            }

            const updatedUserProfile = await UserProfile.findOne({
                where: {
                    user_id: id
                }
            });

            res.status(200).json(updatedUserProfile);
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

            res.status(200).json({ message: "User profile has been deleted" });
        } catch (err) {
            next(err);
        }
    };

}

module.exports = UserProfileController;