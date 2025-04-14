import { createApiHandlers } from "@/lib/api/handler";
import { Major } from "@prisma/client";

type MajorCreate = {
  name: string;
};

const majorHandler = createApiHandlers<Major, MajorCreate>({
  model: "major",
});

export const GET = majorHandler.findAllEntities;
export const POST = majorHandler.createEntity;
