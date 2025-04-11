import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    const responsible = await prisma.responsible.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(responsible, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating responsible", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const responsibles = await prisma.responsible.findMany();

    return NextResponse.json(responsibles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching responsibles", details: error },
      { status: 500 }
    );
  }
}
