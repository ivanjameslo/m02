/*
  Warnings:

  - You are about to drop the column `basicPay` on the `govtcontributions` table. All the data in the column will be lost.
  - Added the required column `pagibig_number` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `philhealth_number` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sss_number` to the `govtContributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tin_number` to the `govtContributions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `govtcontributions` DROP COLUMN `basicPay`,
    ADD COLUMN `pagibig_number` INTEGER NOT NULL,
    ADD COLUMN `philhealth_number` INTEGER NOT NULL,
    ADD COLUMN `sss_number` INTEGER NOT NULL,
    ADD COLUMN `tin_number` INTEGER NOT NULL;
