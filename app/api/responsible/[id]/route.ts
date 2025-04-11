import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const responsible = await prisma.responsible.findUnique({
      where: { id },
    });

    if (!responsible) {
      return NextResponse.json(
        { error: "Responsbile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(responsible, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching responsible", details: error },
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

    const responsible = await prisma.responsible.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(responsible, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating responsible", details: error },
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
    const responsible = await prisma.responsible.delete({
      where: { id },
    });

    return NextResponse.json(responsible, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting responsible", details: error },
      { status: 500 }
    );
  }
}
