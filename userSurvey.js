const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const uniqueValidator = require('mongoose-unique-validator');

const surveySchema = new mongoose.Schema({
    status:{
        type:String,default:"Great"
    },
    q1:{
        answer1:{type:String,default:""},
        answer2:{type:String,default:""}

    }
});

surveySchema.plugin(timestamps);
surveySchema.plugin(uniqueValidator);
module.exports = mongoose.model("survey", surveySchema);