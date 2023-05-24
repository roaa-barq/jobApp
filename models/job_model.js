const db = require('../db');
const mongoose = require('mongoose');
const EmployerModel = require('./employer_model');
const { Schema } = mongoose;

const jobSchema = new Schema({
    userId:{ //the employer who created this job
        type:Schema.Types.ObjectId,
        ref: EmployerModel.modelName
    },
     
    jobTitle: {
        type: String,
     },
    description: {
        type: String,
    },
    requirements: {
        type: Array,
    }, 
    location:{
        type:String
    },
     salary: {
         type: Number,
     }
}
    
);


const JobModel = db.model('job',jobSchema);
module.exports = JobModel;