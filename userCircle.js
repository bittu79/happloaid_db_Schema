const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const uniqueValidator = require('mongoose-unique-validator');

const CircleSchema = new mongoose.Schema({
  fertility:{
    isChecked:{type:Boolean,default:false},
  },
  sleeplessness:{
    isChecked:{type:Boolean,default:false},
  },
  postpartumDepression:{
    isChecked:{type:Boolean,default:false},
  },
  anger:{
    isChecked:{type:Boolean,default:false},
  }

});

CircleSchema.plugin(timestamps);
CircleSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Circle", CircleSchema);