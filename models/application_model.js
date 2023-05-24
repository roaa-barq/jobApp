
const db = require('../db');
const mongoose = require('mongoose');
const ApplierModel = require('./applier_model');
const { Schema } = mongoose;
const applicationSchema = new Schema({
    
    userId:{
        type:Schema.Types.ObjectId,
        ref: ApplierModel.modelName
    },
    jobId: {
        type: String,
     },
     name: {
        type: String,
    },
    email: {
        type: String,
    }, 
    phone:{
        type: String,
    },
    coverLetter:{
        type: String,
    },
    resume:{
        type: Buffer, 
    }
    
}
    
);


const ApplicationModel = db.model('application',applicationSchema);
module.exports = ApplicationModel;