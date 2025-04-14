import { createApiHandlers } from "@/lib/api/handler";

const laboratoryHandlers = createApiHandlers({
  model: "laboratory",
  parseId: (id) => id,
});

export const GET = laboratoryHandlers.findAllEntityById;
export const PUT = laboratoryHandlers.updateEntitybyId;
export const DELETE = laboratoryHandlers.deleteEntityById;
