/*
  Warnings:

  - You are about to drop the column `amount` on the `govtcontributions` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfContribution` on the `govtcontributions` table. All the data in the column will be lost.
  - Added the required column `emp_num` to the `addnlEarnings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payroll_id` to the `addnlEarnings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `basicPay` to the `assign_designation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_num` to the `deductions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payroll_id` to the `deductions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `basicPay` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_num` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagibig_amount` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payroll_id` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `philhealth_amount` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sss_amount` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tin_amount` to the `govtContributions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addnlearnings` ADD COLUMN `emp_num` INTEGER NOT NULL,
    ADD COLUMN `payroll_id` VARCHAR(191) NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `assign_designation` ADD COLUMN `basicPay` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `deductions` ADD COLUMN `emp_num` INTEGER NOT NULL,
    ADD COLUMN `payroll_id` VARCHAR(191) NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `govtcontributions` DROP COLUMN `amount`,
    DROP COLUMN `typeOfContribution`,
    ADD COLUMN `basicPay` DOUBLE NOT NULL,
    ADD COLUMN `emp_num` INTEGER NOT NULL,
    ADD COLUMN `pagibig_amount` DOUBLE NOT NULL,
    ADD COLUMN `payroll_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `philhealth_amount` DOUBLE NOT NULL,
    ADD COLUMN `sss_amount` DOUBLE NOT NULL,
    ADD COLUMN `tin_amount` DOUBLE NOT NULL;

-- AddForeignKey
ALTER TABLE `addnlEarnings` ADD CONSTRAINT `addnlEarnings_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deductions` ADD CONSTRAINT `deductions_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `govtContributions` ADD CONSTRAINT `govtContributions_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;
