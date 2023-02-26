DROP TABLE IF EXISTS `elements`;
DROP TABLE IF EXISTS `moodboards`;


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
    `top` INT UNSIGNED NOT NULL,
    `left` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`boardId`) REFERENCES `moodboards`(`id`)
);

INSERT INTO `moodboards`(id, name)
VALUES
(1, 'Road Trip - 2022'),
(2, 'Museum, about people');

INSERT INTO `elements`(id, boardId, value, type, top, `left`)
VALUES
(1, 1, 'https://freight.cargo.site/t/original/i/E979803984034356783031303274496/000013.JPG', 'image', 50, 30),
(2, 1, 'https://freight.cargo.site/t/original/i/I991003138646051068383544213504/Photo13.jpg', 'image', 37, 74),
(3, 1, 'https://freight.cargo.site/t/original/i/C890520344103913628625369300992/schetsen-62.jpeg', 'image', 24, 69),
(4, 1, 'https://freight.cargo.site/t/original/i/A890520661978207506788362747904/15a.jpg', 'image', 55, 83),
(5, 1, 'https://freight.cargo.site/t/original/i/V901716848693247773010844188672/Photo03_1A-web.jpg', 'image', 69, 35),
(6, 1, 'https://freight.cargo.site/t/original/i/J857071076245630614467654975488/-2018-12-28-22.17.40.png', 'image', 9, 38),
(7, 1, 'https://freight.cargo.site/t/original/i/V834692255952015685683326746624/MALAK-14.jpg', 'image', 47, 16),
(8, 1, 'culture, people, place', 'label', 38, 47),
(9, 1, 'MIX', 'label', 57, 49),
(10, 1, 'time passed like a dream.', 'label', 36, 46),
(11, 2, 'https://freight.cargo.site/t/original/i/P845840427489332540724230488064/0067_33A000030450067.jpeg', 'image', 16, 14),
(12, 2, 'https://freight.cargo.site/t/original/i/M845839944977847804703488868352/sofia-runarsdotter-girl-unboxed-lowres.jpeg', 'image', 29, 62),
(13, 2, 'https://freight.cargo.site/t/original/i/S834700330350151165386002792448/5.jpeg', 'image', 8, 74),
(14, 2, 'https://freight.cargo.site/t/original/i/L845839021441605754434787213312/background3.jpeg', 'image', 53, 8),
(15, 2, 'https://freight.cargo.site/t/original/i/Q745503111589465676932144168960/6A139C4A-8A3A-47B8-B578-385273053A8A.jpeg', 'image', 64, 38),
(16, 2, 'https://freight.cargo.site/t/original/i/I745503579989191196565078802432/11250022_997419976944269_1307446662511208811_o.jpeg', 'image', 63, 38),
(17, 2, 'P. E. O. P. L. E.', 'label', 46, 23),
(18, 2, 'comunity', 'label', 47, 18),
(19, 2, 'individual', 'label', 57, 63);