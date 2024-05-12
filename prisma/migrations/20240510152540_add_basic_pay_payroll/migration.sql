/*
  Warnings:

  - Added the required column `basicPay` to the `payroll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payroll` ADD COLUMN `basicPay` DOUBLE NOT NULL;
