import { createApiHandlers } from "@/lib/api/handler";
import { Course } from "@prisma/client";

type CourseCreate = {
  name: string;
};

const courseHandler = createApiHandlers<Course, CourseCreate>({
  model: "course",
});

export const GET = courseHandler.findAllEntities;
export const POST = courseHandler.createEntity;
