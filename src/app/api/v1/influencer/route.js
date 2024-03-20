import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const category = await searchParams.get("category");
  const rate = await searchParams.get("rate");
  const follower = await searchParams.get("follower");
  const q = await searchParams.get("q");
  try {
    if (rate) {
      let influencer = null;
      if (rate == "lowest") {
        influencer = await prisma.user.findMany({
          where: {
            haveSosmed: true,
          },
          orderBy: {
            rate: "asc",
          },
        });
      } else {
        influencer = await prisma.user.findMany({
          where: {
            haveSosmed: true,
          },
          orderBy: {
            rate: "desc",
          },
        });
      }
      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    } else if (follower) {
      let influencer = null;
      if (follower == "lowest") {
        influencer = await prisma.user.findMany({
          where: {
            haveSosmed: true,
          },
          orderBy: {
            sosmed: {
              follower: "asc",
            },
          },
          include: {
            sosmed: true,
          },
        });
      } else {
        influencer = await prisma.user.findMany({
          where: {
            haveSosmed: true,
          },
          orderBy: {
            sosmed: {
              follower: "desc",
            },
          },
          include: {
            sosmed: true,
          },
        });
      }
      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    } else if (category) {
      const influencer = await prisma.user.findMany({
        where: {
          category: {
            contains: category,
            mode: "insensitive",
          },
        },
      });

      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    } else if (q) {
      const influencer = await prisma.user.findMany({
        where: {
          name: {
            contains: q,
          },
        },
      });

      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    }

    const influencer = await prisma.user.findMany({
      where: {
        haveSosmed: true,
      },
    });
    return NextResponse.json({
      message: "Retrive all influencer!",
      data: influencer,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong, please try again later",
      detail: error.message,
    });
  }
}
