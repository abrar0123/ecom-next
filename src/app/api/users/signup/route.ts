import { connectDB } from "@/src/dbConfig/dbConfig";
import User from "@/src/models/userModels";
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
    console.log("code107 : run 1 ==> ");

    const reqBody = await req.json();
    const { email, username, password } = reqBody;
    console.log("code107 : ==> ", reqBody);

    //   alreayd check

    // const alreadyUser = await User.findOne({ email: email });
    // if (alreadyUser) {
    //   return NextResponse.json({
    //     error: "code107 : User already exists",
    //     status: 400,
    //   });
    // }

    // ************* hash password *************
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: password,
    });

    const saveUser = await newUser.save();
    console.log("new user saved ", saveUser);
    return NextResponse.json({
      message: "code107 : User Created Successfully",
      status: 200,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });

    console.log("code107 : Signup user error ", error);
  }
}
