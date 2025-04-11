import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const parameters = await params;

  const id = parseInt(parameters.id);

  try {
    const faculty = await prisma.faculty.findUnique({
      where: { id },
    });

    if (!faculty) {
      return NextResponse.json({ error: "Faculty not found" }, { status: 404 });
    }

    return NextResponse.json(faculty, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching faculty", details: error },
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

    const faculty = await prisma.faculty.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(faculty, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating faculty", details: error },
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
    const faculty = await prisma.faculty.delete({
      where: { id },
    });

    return NextResponse.json(faculty, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting faculty", details: error },
      { status: 500 }
    );
  }
}
