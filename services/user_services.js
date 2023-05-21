const ApplicationModel = require("../models/application_model");
const JobModel = require("../models/job_model");

class UserServices{
 
    static async addJob( jobTitle, description, requirements,location,salary){
        try{
               //console.log("-----job name-----",jobName);
                
                const createJob = new JobModel({ jobTitle, description, requirements,location,salary});
                return await createJob.save();
        }catch(err){
            throw err;
        }
    }
   
  
   
}

module.exports = UserServices;