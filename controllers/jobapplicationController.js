const { JobApplication, sequelize } = require("../models");
const path = require("path");

class JobApplicationController {
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

  static async updateJobApplication( req, res, next ) {
    try {
      const status = req.query
      const jobId = req.params.id 

      const application = await JobApplication.findOne({
        where: { id: jobId }
      })

      if (!application) {
        throw { name: "ErrorNotFound"}
      }

      await JobApplication.update(status);

      res.status(200).json(application)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = JobApplicationController;
