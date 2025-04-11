import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const major = await prisma.major.findUnique({
      where: { id },
    });

    if (!major) {
      return NextResponse.json({ error: "Major not found" }, { status: 404 });
    }

    return NextResponse.json(major, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching major", details: error },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const body = await req.json();

    const major = await prisma.major.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(major, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating major", details: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const major = await prisma.major.delete({
      where: { id },
    });

    return NextResponse.json(major, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting major", details: error },
      { status: 500 }
    );
  }
}
