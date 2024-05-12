/*
  Warnings:

  - You are about to drop the column `emp_num` on the `payroll` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `payroll` DROP FOREIGN KEY `payroll_emp_num_fkey`;

-- AlterTable
ALTER TABLE `payroll` DROP COLUMN `emp_num`;
