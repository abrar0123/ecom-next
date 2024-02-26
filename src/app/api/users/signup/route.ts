import { connectDB } from "@/src/lib/dbConfig";
import UserModel from "@/src/models/userModels";
import { NextRequest, NextResponse } from "next/server";

const bcrypt = require("bcryptjs");
interface Signup {
  email: String;
  username: String;
  password: String;
}

export async function POST(req: NextRequest) {
  try {
    connectDB();

    const reqBody = await req.json();
    const { email, username, password, check } = reqBody;
    console.log("code107 : ==> ", reqBody);

    const userExistEmail = await UserModel.findOne({ email });
    const userExistuname = await UserModel.findOne({ username });

    console.log(userExistuname, "userExist", userExistEmail);
    if (userExistEmail) {
      return NextResponse.json({
        error: "This email record was already exist  ",
        status: 404,
      });
    }
    if (userExistuname) {
      return NextResponse.json({
        error: "This username record was already exist  ",
        status: 404,
      });
    }

    // ************* hash password *************
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword, "hashedPassword", hashedPassword);
    
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();

    console.log("new user saved ", saveUser);
    return NextResponse.json({
      message: "New User was Created Successfully",
      status: 200,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
