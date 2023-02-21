DROP TABLE IF EXISTS `moodboards`;
DROP TABLE IF EXISTS `elements`;

CREATE TABLE `moodboards`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `elements`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `boardId` INT UNSIGNED NOT NULL,
    `value` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`boardId`) REFERENCES `moodboards`(`id`)
);