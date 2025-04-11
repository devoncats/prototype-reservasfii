import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const laboratory = await prisma.laboratory.findUnique({
      where: { id },
    });

    if (!laboratory) {
      return NextResponse.json(
        { error: "Laboratory not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(laboratory, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching laboratory", details: error },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const body = await req.json();

    const laboratory = await prisma.laboratory.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(laboratory, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating laboratory", details: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const laboratory = await prisma.laboratory.delete({
      where: { id },
    });

    return NextResponse.json(laboratory, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting laboratory", details: error },
      { status: 500 }
    );
  }
}
