import { getAllCourses } from "@/lib/api/course/service";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    const course = await prisma.course.create({
      data: {
        name,
      },
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating course", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const courses = getAllCourses();

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching courses", details: error },
      { status: 500 }
    );
  }
}
