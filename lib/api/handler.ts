/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { PrismaClient } from "@prisma/client/extension";
import { prisma } from "../prisma";
import { NextRequest, NextResponse } from "next/server";

export type EntityId = string | number;

export type EntityData = Record<string, unknown>;

export type HandlerConfig<
  T extends EntityData,
  TCreate extends EntityData = T,
> = {
  model: keyof PrismaClient;
  parseId?: (id: EntityId) => EntityId;
  beforeCreate?: (data: TCreate) => Partial<T>;
  afterFind?: (item: T | null) => T | null;
  includeRelations?: Record<string, boolean>;
};

export function createApiHandlers<
  T extends EntityData,
  TCreate extends EntityData = T,
>(config: HandlerConfig<T, TCreate>) {
  const {
    model,
    parseId = (id: string) => parseInt(id),
    beforeCreate = (data: TCreate) => data as unknown as Partial<T>,
    afterFind = (item: T | null) => item,
    includeRelations = {},
  } = config;

  // handler for GET /api/[entity]
  async function findAllEntities() {
    try {
      const modelAccess = prisma[model as keyof typeof prisma];

      if (
        !modelAccess ||
        typeof (modelAccess as { findMany: Function }).findMany !== "function"
      ) {
        throw new Error(`Invalid model access: ${String(model)}`);
      }

      const items = (await (modelAccess as { findMany: Function }).findMany({
        include: includeRelations,
      })) as T[];

      return NextResponse.json(items, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error fetching items", details: error },
        { status: 500 }
      );
    }
  }

  // handler for POST /api/[entity]
  async function createEntity(req: NextRequest) {
    try {
      const data = (await req.json()) as TCreate;
      const processedData = beforeCreate(data);

      const modelAccess = prisma[model as keyof typeof prisma];

      if (
        !modelAccess ||
        typeof (modelAccess as { create: Function }).create !== "function"
      ) {
        throw new Error(`Invalid model access: ${String(model)}`);
      }

      const item = (await (modelAccess as { create: Function }).create({
        data: processedData,
      })) as T;

      return NextResponse.json(item, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error creating item", details: error },
        { status: 500 }
      );
    }
  }

  // handler for GET /api/[entity]/[id]
  async function findAllEntityById(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const resolvedParams = await params;
    const idParam = resolvedParams.id;

    const id = parseId(idParam);

    if (typeof id === "number" && isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
      const modelAccess = prisma[model as keyof typeof prisma];

      if (
        !modelAccess ||
        typeof (modelAccess as { findUnique: Function }).findUnique !==
          "function"
      ) {
        throw new Error(`Invalid model access: ${String(model)}`);
      }

      const item = (await (modelAccess as { findUnique: Function }).findUnique({
        where: { id },
        include: includeRelations,
      })) as T | null;

      if (!item) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }

      const processedItem = afterFind(item);

      return NextResponse.json(processedItem, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error fetching item", details: error },
        { status: 500 }
      );
    }
  }

  // handler for PUT /api/[entity]/[id]
  async function updateEntitybyId(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const resolvedParams = await params;
    const idParam = resolvedParams.id;

    const id = parseId(idParam);

    if (typeof id === "number" && isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
      const data = (await req.json()) as Partial<T>;

      const modelAccess = prisma[model as keyof typeof prisma];

      if (
        !modelAccess ||
        typeof (modelAccess as { update: Function }).update !== "function"
      ) {
        throw new Error(`Invalid model access: ${String(model)}`);
      }

      const item = (await (modelAccess as { update: Function }).update({
        where: { id },
        data,
      })) as T;

      return NextResponse.json(item, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error updating item", details: error },
        { status: 500 }
      );
    }
  }

  // handler for DELETE /api/[entity]/[id]
  async function deleteEntityById(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const resolvedParams = await params;
    const idParam = resolvedParams.id;

    const id = parseId(idParam);

    if (typeof id === "number" && isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
      const modelAccess = prisma[model as keyof typeof prisma];

      if (
        !modelAccess ||
        typeof (modelAccess as { delete: Function }).delete !== "function"
      ) {
        throw new Error(`Invalid model access: ${String(model)}`);
      }

      const item = (await (modelAccess as { delete: Function }).delete({
        where: { id },
      })) as T;

      return NextResponse.json(item, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error deleting item", details: error },
        { status: 500 }
      );
    }
  }

  return {
    findAllEntities,
    createEntity,
    findAllEntityById,
    updateEntitybyId,
    deleteEntityById,
  };
}
