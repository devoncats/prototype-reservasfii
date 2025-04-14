import { createApiHandlers } from "@/lib/api/handler";

const facultyHandlers = createApiHandlers({
  model: "faculty",
});

export const GET = facultyHandlers.findAllEntityById;
export const PUT = facultyHandlers.updateEntitybyId;
export const DELETE = facultyHandlers.deleteEntityById;
