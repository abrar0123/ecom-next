import { connectDB } from "@/src/lib/dbConfig";
import userLoginModel from "@/src/lib/models/userLoginModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectDB();

    const reqBody = await req.json();
    const { username } = reqBody;
    console.log("code109 : ==> ", reqBody);

    const userExistuname = await userLoginModel.findOne({ username });

    console.log(userExistuname, "userExist");

    if (userExistuname) {
      return NextResponse.json({
        message: "User have Successfully logged In ",
        status: 200,
        userExistuname,
      });
    } else {
      return NextResponse.json({
        error: "User have incorrect username or password ",
        status: 400,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
