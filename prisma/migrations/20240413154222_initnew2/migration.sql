/*
  Warnings:

  - You are about to drop the column `payroll_id` on the `addnlearnings` table. All the data in the column will be lost.
  - You are about to drop the column `payroll_id` on the `deductions` table. All the data in the column will be lost.
  - You are about to drop the column `payroll_id` on the `govtcontributions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `addnlearnings` DROP COLUMN `payroll_id`;

-- AlterTable
ALTER TABLE `deductions` DROP COLUMN `payroll_id`;

-- AlterTable
ALTER TABLE `govtcontributions` DROP COLUMN `payroll_id`;

-- CreateTable
CREATE TABLE `payroll` (
    `id` VARCHAR(191) NOT NULL,
    `emp_num` INTEGER NOT NULL,
    `payday` DATETIME(3) NOT NULL,
    `start_of_cutoff` DATETIME(3) NOT NULL,
    `end_of_cutoff` DATETIME(3) NOT NULL,

    UNIQUE INDEX `payroll_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `payroll` ADD CONSTRAINT `payroll_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;
