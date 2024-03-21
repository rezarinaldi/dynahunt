import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "@/prisma/utils";

export async function POST(req) {
  const { name, email, password, phone_number } = await req.json();

  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist) {
      return NextResponse.json({ message: "User already exist!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        phone_number,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Success create user!", data: createUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}
