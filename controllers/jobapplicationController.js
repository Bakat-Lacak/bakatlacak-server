const {
  JobApplication,
  sequelize,
  JobListing,
  CompanyProfile,
  UserCompany,
  User
} = require("../models");
const path = require("path");

class JobApplicationController {
  static async getAllByUserId(req, res, next) { //untuk user melihat apply
    try {
      const { id } = req.loggedUser;
      const jobApplications = await JobListing.findAll({
        include: [
          {
            model: JobApplication,
            where: { user_id: id }
          },
          {
            model: CompanyProfile
          }

        ]
      });

      res.status(201).json(jobApplications);
    } catch (err) {
      next(err);
    }
  }

  static async createJobApplication(req, res, next) {
    try {
      const { job_listing_id } = req.body;
      const { id } = req.loggedUser;

      const resumeFile = req.files.resume[0];

      let resumeFilePath;
      let relativeResumeFilePath;
      let resumeFileLink;
      let resumeStaticLink;

      if (resumeFile !== undefined) {
        resumeFilePath = resumeFile.path;
        relativeResumeFilePath = path.relative(process.cwd(), resumeFilePath);
        resumeFileLink = relativeResumeFilePath.replace(/\\/g, "/");
        resumeStaticLink = resumeFileLink;
      }

      const jobapplication = await JobApplication.create({
        user_id: id,
        job_listing_id: job_listing_id,
        status: "applied",
        ...(resumeFileLink !== undefined && { resume: resumeStaticLink }),
      });

      res.status(201).json(jobapplication);
    } catch (err) {
      next(err);
    }
  }

  static async updateJobApplication(req, res, next) {
    try {
      const statusNew = req.query.status;
      const jobId = req.params.id;

      const application = await JobApplication.findOne({
        where: { id: jobId },
      });

      if (!application) {
        throw { name: "ErrorNotFound" };
      }

      await JobApplication.update(
        {
          user_id: application.user_id,
          job_listing_id: application.job_listing_id,
          status: statusNew,
          resume: application.resume,
        },
        { where: { id: jobId } }
      );

      res.status(201).json({ message: "Update success" });
    } catch (err) {
      next(err);
    }
  }

  static async getApplicationForRecruiter(req,res,next) {
    try{
      const id = req.params.id

      const jobapplication = await JobApplication.findAll({
        where: {
          job_listing_id: id
        },
        include: [
        {
          model: User
        },
        {
          model: JobListing
        }
      ]
        
        
      })
      res.status(200).json(jobapplication)
    } catch(err) {
      next(err)
    }
  }

  static async allAppliedUser(req, res, next) {
    try {
      const { id } = req.loggedUser;
      const findCompany = await UserCompany.findOne({
        where: { user_id: id },
      });

      // const jobApplications = await JobListing.findAll({
      //   where: {
      //     company_id: findCompany.company_id,
      //   }
      //  })
      const jobApplications = await JobListing.findAll({
        where :{
          company_id: findCompany.company_id
        }
      })

      res.status(201).json(jobApplications);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = JobApplicationController;
