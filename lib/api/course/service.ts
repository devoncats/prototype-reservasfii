import { prisma } from "@/lib/prisma";
import { CreateFacultyDto } from "./types";

export async function getAllCourses() {
  return prisma.course.findMany();
}

export async function getCourseById(id: number) {
  return await prisma.course.findUnique({
    where: { id },
  });
}

export async function createCourse(data: CreateFacultyDto) {
  return await prisma.course.create({
    data,
  });
}
