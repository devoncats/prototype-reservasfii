import { createApiHandlers } from "@/lib/api/handler";
import { Laboratory } from "@prisma/client";

type LaboratoryCreate = {
  name: string;
};

const laboratoryHandler = createApiHandlers<Laboratory, LaboratoryCreate>({
  model: "laboratory",
  parseId: (id) => id,
});

export const GET = laboratoryHandler.findAllEntities;
export const POST = laboratoryHandler.createEntity;
