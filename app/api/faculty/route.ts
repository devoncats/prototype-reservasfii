import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    const faculty = await prisma.faculty.create({
      data: {
        name,
      },
    });

    return NextResponse.json(faculty, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating faculty", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const faculties = await prisma.faculty.findMany();

    return NextResponse.json(faculties, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching faculties", details: error },
      { status: 500 }
    );
  }
}
