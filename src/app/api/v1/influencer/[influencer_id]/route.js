import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";

export async function GET(_, { params }) {
  const { influencer_id } = await params;

  try {
    const influencer = await prisma.user.findUnique({
      where: {
        id: influencer_id,
      },
      include: {
        sosmed: true,
        category: true,
      },
    });
    return NextResponse.json({
      message: "Retrive a influencer!",
      data: influencer,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}

export async function DELETE(_, { params }) {
  const { influencer_id } = await params;
  try {
    const influencer = await prisma.user.delete({
      where: {
        id: influencer_id,
      },
    });
    return NextResponse.json({
      message: "Delete a influencer!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}

export async function PUT(req, { params }) {
  const { influencer_id } = await params;
  const { username, follower, bio, rate } = await req.json();

  try {
  } catch (error) {}
}
