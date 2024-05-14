/*
  Warnings:

  - A unique constraint covering the columns `[emp_num]` on the table `govtContributions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `govtContributions_emp_num_key` ON `govtContributions`(`emp_num`);
