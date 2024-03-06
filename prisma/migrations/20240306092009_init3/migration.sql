/*
  Warnings:

  - You are about to alter the column `employee_type` on the `assign_designation` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.
  - You are about to alter the column `status` on the `assign_designation` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `VarChar(191)`.
  - You are about to alter the column `status` on the `departments` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `status` on the `designation` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.
  - A unique constraint covering the columns `[emp_num]` on the table `assign_designation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `assign_designation` MODIFY `employee_type` VARCHAR(191) NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `departments` MODIFY `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `designation` MODIFY `status` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `assign_designation_emp_num_key` ON `assign_designation`(`emp_num`);
