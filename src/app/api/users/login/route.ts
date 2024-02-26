import { connectDB } from "@/src/lib/dbConfig";
import userLoginModel from "@/src/lib/models/userLoginModel";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcryptjs");

export async function POST(req: NextRequest) {
  try {
    connectDB();

    const reqBody = await req.json();
    const { username, password } = reqBody;
    console.log("code109 : ==> ", reqBody);

    const user = await userLoginModel.findOne({ username });
    const matchpass = await bcrypt.compare(password, user.password);
    console.log(user, "userExist", matchpass);

    if (!user) {
      return NextResponse.json({
        error: "User have incorrect password username entered ",
        status: 401,
        user,
      });
    } else if (!matchpass) {
      return NextResponse.json({
        error: "User have incorrect password entered ",
        status: 401,
      });
    } else if (user && matchpass) {
      return NextResponse.json({
        error: "User have successfully login In ",
        status: 200,
        user,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
