import { createApiHandlers } from "@/lib/api/handler";
import { Responsible } from "@prisma/client";

type ResponsibleCreate = {
  name: string;
};

const responsibleHandler = createApiHandlers<Responsible, ResponsibleCreate>({
  model: "responsible",
});

export const GET = responsibleHandler.findAllEntities;
export const POST = responsibleHandler.createEntity;
