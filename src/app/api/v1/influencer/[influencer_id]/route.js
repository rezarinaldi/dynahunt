import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";
import { uploadFile } from "@/lib/uploadFile";

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
  const formData = await req.formData();
  const image = formData.get("image");
  const username = formData.get("username");
  const follower = formData.get("follower");
  const bio = formData.get("bio");
  const location = formData.get("location");
  const rate = formData.get("rate");
  const link1 = formData.get("link1");
  const link2 = formData.get("link2");
  const link3 = formData.get("link3");
  const category = formData.get("category");
  const { influencer_id } = await params;

  try {
    await uploadFile({
      Body: image,
      ContentType: image.type,
      Key: image.name,
      Dir: influencer_id,
    });

    const influencer = await prisma.user.update({
      where: {
        id: influencer_id,
      },
      data: {
        bio,
        rate,
        sosmed: {
          create: {
            photo: image.name,
            username,
            follower,
            sample_content: [link1, link2, link3],
          },
        },
        location,
        category,
        haveSosmed: true,
      },
    });

    return NextResponse.json({
      message: "Success udpate a influencer!",
      data: influencer,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}
