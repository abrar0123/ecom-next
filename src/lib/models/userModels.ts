import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a enter"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter password "],
  },

  isVerfied: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const UserModel = mongoose.models.users || mongoose.model("users", userSchema);

export default UserModel;
