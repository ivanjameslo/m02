/*
  Warnings:

  - You are about to drop the column `basicPay` on the `assign_designation` table. All the data in the column will be lost.
  - Added the required column `basicPay` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `assign_designation` DROP COLUMN `basicPay`;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `basicPay` DOUBLE NOT NULL;
