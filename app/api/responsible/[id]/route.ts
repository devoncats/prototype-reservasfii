import { createApiHandlers } from "@/lib/api/handler";

const responsibleHandlers = createApiHandlers({
  model: "responsible",
});

export const GET = responsibleHandlers.findAllEntityById;
export const PUT = responsibleHandlers.updateEntitybyId;
export const DELETE = responsibleHandlers.deleteEntityById;
