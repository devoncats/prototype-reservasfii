import { createApiHandlers } from "@/lib/api/handler";
import { Faculty } from "@prisma/client";

type FacultyCreate = {
  name: string;
};

const facultyHandler = createApiHandlers<Faculty, FacultyCreate>({
  model: "faculty",
});

export const GET = facultyHandler.findAllEntities;
export const POST = facultyHandler.createEntity;
