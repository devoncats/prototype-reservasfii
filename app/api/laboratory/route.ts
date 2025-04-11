import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id, name } = await req.json();

    const laboratory = await prisma.laboratory.create({
      data: {
        id,
        name,
      },
    });

    return NextResponse.json(laboratory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating laboratory", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const laboratories = await prisma.laboratory.findMany();

    return NextResponse.json(laboratories, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching laboratories", details: error },
      { status: 500 }
    );
  }
}
