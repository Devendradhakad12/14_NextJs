import { connectToDB } from "@/db/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt, { genSalt } from "bcryptjs"

//@types/bcryptjs
//@types/jsonwebtoken

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    if(!username || !email || !password) return  NextResponse.json({ error: "Missing data" }, { status: 401 });

    // check if user exist
    const userExist  = await User.findOne({email})
    if(userExist) return  NextResponse.json({ error: "User aleady exist" }, { status: 400 });
      
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser =   new User({
      username,email,hashedPassword
     })

    const savedUser =   await newUser.save()
    console.log(savedUser)
    return NextResponse.json({ message:"User created" }, { status: 200 });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
