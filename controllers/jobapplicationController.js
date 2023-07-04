const { JobApplication } = require("../models");
const path = require("path");

class JobApplicationController {
  static async createJobApplication(req, res, next) {
    try {
      const { joblisting_id } = req.body;
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
        resumeStaticLink = APP_HOSTNAME + resumeFileLink;
      }

      const jobapplication = await JobApplication.create({
        user_id: id,
        joblisting_id: joblisting_id,
        status: "ON REVIEW",
        ...(resumeFileLink !== undefined && { resume: resumeStaticLink }),
      });

      res.status(201).json(jobapplication);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = JobApplicationController;
