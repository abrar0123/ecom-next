import mongoose from "mongoose";

import { connectDB } from "@/src/dbConfig/dbConfig";
import User from "@/src/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

interface Signup {
  email: String;
  username: String;
  password: String;
}
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, username, password } = reqBody;
    console.log("user ==> ", reqBody);

    //   alreayd check

    const alreadyUser = await User.findOne({ email: email });
    if (alreadyUser) {
      return NextResponse.json({ error: '"User already exists', status: 400 });
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();
    console.log("new user saved ", saveUser);
    NextResponse.json({
      error: '"User Created Successfully',
      status: 200,
      saveUser,
    });
  } catch (error) {
    console.log("Signup user error ", error);
  }
}
