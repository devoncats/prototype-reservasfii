import { Course } from "@prisma/client";

export type CreateFacultyDto = Omit<Course, "id" | "createdAt" | "updatedAt">;
export type UpdateFacultyDto = Partial<CreateFacultyDto>;
