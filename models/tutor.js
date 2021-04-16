const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true},
    hourlyRate: {type: String, required: true},
    programmingLanguage:{type: String, required: true}  ,
    description: {type: String, required: true},
    password_digest: { type: String, required: true }
  },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Tutor", tutorSchema);
