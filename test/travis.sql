CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mydb`;
CREATE TABLE IF NOT EXISTS `students` (     
    `id` int(11) NOT NULL,     
    `name` varchar(200) NOT NULL,     
    `age` INT NOT NULL,     
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP   
);

ALTER TABLE `students` ADD PRIMARY KEY (`id`);
ALTER TABLE `students` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;