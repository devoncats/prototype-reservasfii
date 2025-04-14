import { createApiHandlers } from "@/lib/api/handler";

const bookingHandlers = createApiHandlers({
  model: "booking",
});

export const GET = bookingHandlers.findAllEntityById;
export const PUT = bookingHandlers.updateEntitybyId;
export const DELETE = bookingHandlers.deleteEntityById;
