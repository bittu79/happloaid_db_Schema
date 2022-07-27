const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: "" , trim: true },
  gender: { type: String, default: "" },
  mobile_number: { type: Number, required: true },
  country_code: { type: Number, default: 91 },
  emailid: { type: String, default: "", trim: true },
  dob: { type: String, default: "" },
  city: { type: String, default: "Bengaluru" },
  state: { type: String, default: "" },
  country: { type: String, default: "India" },
  pincode: { type: String, default: "" },
  address: { type: String, default: "" },
  user_name: { type: String, default: "" , trim: true},
  profile_avatar: { type: String, default: "" },
  profile_image: { type: String, default: "" },
  email_verification_status: { type: String, default: 'not_verified' },
  otp: { type: String, default: "" },
  otp_generated_on: { type: Date, default: new Date().toISOString() },
  otp_verified: { type: Boolean, default: false },
  upiPin_status:{type:Boolean,default:false},
  upinPin:{type:String,default:""},
  email_verification_otp_generated_on: { type: Date, default: new Date().toISOString() },
  email_verification_otp: { type: String, default: "" },
  is_registered: { type: Boolean, default: false },
  registered_on: { type: Date, default: new Date().toISOString() },
  first_logged_in: { type: Date, default: new Date().toISOString() },
  last_logged_in: { type: Date, default: new Date().toISOString() },
});

UserSchema.index({
  "name": "text",
  "emailid": "text",
}, {
  "name": "users_full_text",
  "default_language": "en",
  "language_override": "en"
});
UserSchema.plugin(timestamps);
UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", UserSchema);