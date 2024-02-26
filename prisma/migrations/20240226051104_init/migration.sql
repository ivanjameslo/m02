-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_num` INTEGER NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `address_line` VARCHAR(191) NOT NULL,
    `brgy` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `zip_code` INTEGER NOT NULL,

    UNIQUE INDEX `employees_emp_num_key`(`emp_num`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assign_designation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_num` INTEGER NOT NULL,
    `designation_id` INTEGER NOT NULL,
    `employee_type` ENUM('Regular', 'Irregular', 'PartTime', 'Intern', 'Remote') NOT NULL,
    `status` ENUM('Active', 'Resigned', 'AWOL') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dept_name` VARCHAR(191) NOT NULL,
    `status` ENUM('Active', 'Inactive') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `designation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `designation_name` VARCHAR(191) NOT NULL,
    `department_id` INTEGER NOT NULL,
    `status` ENUM('Active', 'Inactive') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `assign_designation` ADD CONSTRAINT `assign_designation_emp_num_fkey` FOREIGN KEY (`emp_num`) REFERENCES `employees`(`emp_num`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assign_designation` ADD CONSTRAINT `assign_designation_designation_id_fkey` FOREIGN KEY (`designation_id`) REFERENCES `designation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `designation` ADD CONSTRAINT `designation_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
