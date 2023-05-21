
const db = require('../db');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const applicationSchema = new Schema({
    
     
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