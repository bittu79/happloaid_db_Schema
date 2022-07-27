const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = new mongoose.Schema({
    post_txt:{type:String,default:""},
    circle:{type:String,default:""},
    save_status:{type:Boolean,default:false},
    responses:[{
        res_id:{type:String,default:""},
        res_txt:{type:String,default:""},
        res_time:{type:Date,default:new Date().toISOString()}
    }],
    like:{type:Number,default:0},
    shareCount:{type:Number,default:0},
    posted_time:{type:Date,default:new Date().toISOString()}
});

postSchema.plugin(timestamps);
postSchema.plugin(uniqueValidator);
module.exports = mongoose.model("post", postSchema);