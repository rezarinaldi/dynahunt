import { NextResponse } from "next/server";
import prisma from "@/prisma/utils";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const category = await searchParams.get("category");
  const min_rate = await searchParams.get("min_rate");
  const max_rate = await searchParams.get("max_rate");
  const q = await searchParams.get("q");
  try {
    if (min_rate && max_rate && category) {
      const influencer = await prisma.user.findMany({
        where: {
          category: {
            some: {
              name: category,
            },
          },
          rate: {
            lte: max_rate,
            gte: min_rate,
          },
        },
      });

      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    }
    if (min_rate && max_rate) {
      const influencer = await prisma.user.findMany({
        where: {
          rate: {
            lte: max_rate,
            gte: min_rate,
          },
        },
      });

      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    } else if (max_rate) {
      const influencer = await prisma.user.findMany({
        where: {
          rate: {
            lte: max_rate,
          },
        },
      });

      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    } else if (min_rate) {
      const influencer = await prisma.user.findMany({
        where: {
          rate: {
            gte: min_rate,
          },
        },
      });

      return NextResponse.json({
        message: "Retrive all influencer!",
        data: influencer,
      });
    } else if (category) {
      const influencer = await prisma.user.findMany({
        where: {
          category: {
            some: {
              name: category,
            },
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

    const influencer = await prisma.user.findMany();
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
