/*
  Warnings:

  - Added the required column `category` to the `Major` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MajorCategory" AS ENUM ('UNDERGRADUATE', 'POSTGRADUATE', 'MASTERS', 'DOCTORATE');

-- AlterTable
ALTER TABLE "Major" ADD COLUMN     "category" "MajorCategory" NOT NULL;
