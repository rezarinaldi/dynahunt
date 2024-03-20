import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";

export async function DELETE(_, { params }) {
  const { influencer_id, interest_id } = await params;

  try {
    const interest = await prisma.interest.delete({
      where: {
        id: interest_id,
      },
    });

    return NextResponse.json({
      meesage: "Success delete a invitation campaign",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}

export async function GET(_, { params }) {
  const { influencer_id, interest_id } = await params;

  try {
    const interest = await prisma.interest.findFirst({
      where: {
        id: interest_id,
      },
    });

    return NextResponse.json({
      message: "Retrive a invitation campaign",
      data: interest,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}
