const db = require('../db');
const mongoose = require('mongoose');
const JobModel = require('./job_model');
const ApplierModel = require('./applier_model');
const { Schema } = mongoose;

const savedJobSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref: ApplierModel.modelName
    },
    jobId: {
            type:Schema.Types.ObjectId,
                ref: JobModel.modelName
        },
 });


const SavedJobModel = db.model('savedJob',savedJobSchema);
module.exports = SavedJobModel;