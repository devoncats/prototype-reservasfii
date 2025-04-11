import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, category } = await req.json();

    const major = await prisma.major.create({
      data: {
        name,
        category,
      },
    });

    return NextResponse.json(major, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating major", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const majors = await prisma.major.findMany();

    return NextResponse.json(majors, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching majors", details: error },
      { status: 500 }
    );
  }
}
