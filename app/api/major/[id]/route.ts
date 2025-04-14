import { createApiHandlers } from "@/lib/api/handler";

const majorHandlers = createApiHandlers({
  model: "major",
});

export const GET = majorHandlers.findAllEntityById;
export const PUT = majorHandlers.updateEntitybyId;
export const DELETE = majorHandlers.deleteEntityById;
