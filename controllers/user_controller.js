const UserServices = require('../services/user_services');
const JobModel= require('../models/job_model');
const ApplicationModel= require("../models/application_model")
const router = require('../routers/user_routers');
exports.addJob = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const {  jobTitle, description, requirements,location,salary } = req.body;
      
        const response = await UserServices.addJob( jobTitle, description, requirements,location, salary);

        res.json({ status: true, success: 'job added successfully' });


    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}
exports.addApplication=async (req, res) => {
    try {
      const { jobId, name, email, phone, coverLetter } = req.body;
      const resume = req.file.buffer; // Access the file buffer
  
      const newApplication = new ApplicationModel({ jobId, name,  email, phone,  coverLetter, resume,});
  
      await newApplication.save();
      res.status(201).json({ message: 'Application added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'sth went wrong' });
    }
  }
  exports.getAllApplications = async (req, res) => {
    try {
      const applications = await ApplicationModel.find();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve applications' });
    }
  }
  exports.getResumeOfSpecificApplication=async (req, res) => {
    try {
      const application = await ApplicationModel.findById(req.params.id);
      if (!application) {
        return res.status(404).json({ error: 'Application doesnt exsit' });
      }
  
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${application.name}-resume.pdf`,
      });
      res.send(application.resume);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve the PDF file' });
    }
  }
  /********************************** */