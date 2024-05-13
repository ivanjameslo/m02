/*
  Warnings:

  - You are about to drop the column `addnlEarnings` on the `payroll` table. All the data in the column will be lost.
  - You are about to drop the column `basicPay` on the `payroll` table. All the data in the column will be lost.
  - You are about to drop the column `deductions` on the `payroll` table. All the data in the column will be lost.
  - You are about to drop the column `pagibig` on the `payroll` table. All the data in the column will be lost.
  - You are about to drop the column `philhealth` on the `payroll` table. All the data in the column will be lost.
  - You are about to drop the column `sss` on the `payroll` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `payroll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `payroll` DROP COLUMN `addnlEarnings`,
    DROP COLUMN `basicPay`,
    DROP COLUMN `deductions`,
    DROP COLUMN `pagibig`,
    DROP COLUMN `philhealth`,
    DROP COLUMN `sss`,
    DROP COLUMN `tax`;
