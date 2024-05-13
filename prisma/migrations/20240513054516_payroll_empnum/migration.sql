/*
  Warnings:

  - Added the required column `emp_num` to the `payroll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payroll` ADD COLUMN `emp_num` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `payroll` ADD CONSTRAINT `payroll_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;
