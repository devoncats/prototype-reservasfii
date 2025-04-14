import { createApiHandlers } from "@/lib/api/handler";
import { Booking } from "@prisma/client";

type BookingCreate = {
  startTime: string;
  endTime: string;
  status?: string;
  comment?: string;
  userId: string;
  laboratoryId: string;
  responsibleId: number;
  courseId: number;
  majorId: number;
  facultyId: number;
};

const bookingHandler = createApiHandlers<Booking, BookingCreate>({
  model: "booking",
});

export const GET = bookingHandler.findAllEntities;
export const POST = bookingHandler.createEntity;
