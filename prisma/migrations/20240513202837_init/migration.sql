/*
  Warnings:

  - A unique constraint covering the columns `[emp_num]` on the table `payroll` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `payroll_emp_num_key` ON `payroll`(`emp_num`);
