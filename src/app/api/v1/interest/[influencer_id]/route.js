import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";

export async function POST(req, { params }) {
  const { influencer_id } = await params;
  const { name, email, phone_number, title_campaign, desc_campaign } =
    await req.json();

  try {
    if (!name || !email || !phone_number || !desc_campaign || !title_campaign) {
      return NextResponse.json({ message: "Field can't empty" });
    }

    const interest = await prisma.interest.create({
      data: {
        name,
        email,
        phone_number,
        desc_campaign,
        title_campaign,
        user_id: influencer_id,
      },
    });
    return NextResponse.json({
      message: "Success send inviting campaign",
      data: interest,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}

export async function GET(req, { params }) {
  const { influencer_id } = await params;

  try {
    const interest = await prisma.interest.findMany({
      where: {
        user_id: influencer_id,
      },
    });

    return NextResponse.json({
      message: "Retrive all inviting campaign",
      data: interest,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}
