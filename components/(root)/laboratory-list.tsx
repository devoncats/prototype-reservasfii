"use client";

import React from "react";
import { Laboratory } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Skeleton } from "../ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Updated schema to ensure consistent typing
const bookingSchema = z.object({
  startTime: z.date(),
  endTime: z.date(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED", "CANCELLED"]),
  userId: z.string().min(1, "User ID is required"),
  laboratoryId: z.string().min(1, "Laboratory ID is required"),
  responsibleId: z.string().min(1, "Responsible ID is required"),
  courseId: z.string().min(1, "Course ID is required"),
  majorId: z.string().min(1, "Major ID is required"),
  facultyId: z.string().min(1, "Faculty is required"),
  comment: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function LaboratoryList() {
  const [laboratories, setLaboratories] = React.useState<Laboratory[]>([]);
  const [selectedLaboratory, setSelectedLaboratory] =
    React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      startTime: new Date(),
      endTime: new Date(),
      status: "PENDING",
      comment: "",
      userId: "cm9c0enom00005h97avli65wa",
      laboratoryId: "",
      responsibleId: "",
      courseId: "",
      majorId: "",
      facultyId: "",
    },
  });

  React.useEffect(() => {
    async function fetchAllLaboratories() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/laboratory`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Error fetching laboratories");
        }

        const data = await response.json();
        setLaboratories(data);
        setSelectedLaboratory(data[0]?.id || "");
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
        console.error("Error fetching laboratories:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllLaboratories();
  }, []);

  if (isLoading) {
    return <Skeleton className="h-9 w-96 rounded bg-neutral-200/50"></Skeleton>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Properly typed onSubmit handler
  const onSubmit = (data: BookingFormValues) => {
    console.log(data);
    // Here you would handle the form submission
  };

  return (
    <div className="flex h-fit items-center justify-between">
      <Select value={selectedLaboratory} onValueChange={setSelectedLaboratory}>
        <SelectTrigger className="bg-background h-9 w-96 rounded shadow-none hover:cursor-pointer">
          <SelectValue placeholder="Select a laboratory" />
        </SelectTrigger>
        <SelectContent>
          {laboratories.map((laboratory) => (
            <SelectItem key={laboratory.id} value={laboratory.id}>
              {laboratory.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="text-foreground bg-background hover:text-foreground hover:bg-muted h-9 rounded px-8 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
          >
            Crear nueva reserva
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear nueva reserva</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Form fields will go here */}
              <DialogFooter>
                <Button type="submit">Crear</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
