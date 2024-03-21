import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!userExist)
      return NextResponse.json(
        { message: "Invalid credential, please try again!" },
        { status: 404 }
      );

    const verifyPassword = await bcrypt.compare(password, userExist.password);
    if (!verifyPassword)
      return NextResponse.json(
        { message: "Invalid credential, please try again!" },
        { status: 404 }
      );

    const payload = {
      id: userExist.id,
      name: userExist.name,
      email: userExist.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const res = NextResponse.json(
      { message: "Login succesfully!", data: payload },
      { status: 200 }
    );
    res.cookies.set("token", token);

    return res;
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}
