/*
  Warnings:

  - You are about to drop the column `end` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "end",
DROP COLUMN "start",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
