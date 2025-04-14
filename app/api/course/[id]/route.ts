import { createApiHandlers } from "@/lib/api/handler";

const courseHandlers = createApiHandlers({
  model: "course",
});

export const GET = courseHandlers.findAllEntityById;
export const PUT = courseHandlers.updateEntitybyId;
export const DELETE = courseHandlers.deleteEntityById;
