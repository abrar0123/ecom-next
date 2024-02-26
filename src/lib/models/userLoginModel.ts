import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please Enter password "],
  },
});

const userLoginModel =
  mongoose.models.users || mongoose.model("users", userSchema);

export default userLoginModel;
