-- CreateTable
CREATE TABLE `leaves` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_num` INTEGER NOT NULL,
    `start_leave_date` DATETIME(3) NOT NULL,
    `end_leave_date` DATETIME(3) NOT NULL,
    `leave_type` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `signatories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_num` INTEGER NOT NULL,
    `highersuperior` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `signatories_emp_num_key`(`emp_num`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `leaves` ADD CONSTRAINT `leaves_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `signatories` ADD CONSTRAINT `signatories_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `signatories` ADD CONSTRAINT `signatories_highersuperior_fkey` FOREIGN KEY (`highersuperior`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;
