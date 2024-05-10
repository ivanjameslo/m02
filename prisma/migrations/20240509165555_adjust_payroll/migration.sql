/*
  Warnings:

  - Added the required column `addnlEarnings` to the `payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deductions` to the `payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagibig` to the `payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `philhealth` to the `payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sss` to the `payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `payroll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payroll` ADD COLUMN `addnlEarnings` DOUBLE NOT NULL,
    ADD COLUMN `deductions` DOUBLE NOT NULL,
    ADD COLUMN `pagibig` DOUBLE NOT NULL,
    ADD COLUMN `philhealth` DOUBLE NOT NULL,
    ADD COLUMN `sss` DOUBLE NOT NULL,
    ADD COLUMN `tax` DOUBLE NOT NULL;
