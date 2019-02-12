create table t_order(
	`id` INT NOT NULL AUTO_INCREMENT,
	`orderNumber` VARCHAR(50) NOT NULL,
	`message` VARCHAR(500) NULL,
	`contactName` VARCHAR(50) NULL,
	`contactPhone` VARCHAR(50) NULL,
	`address` VARCHAR(50) NULL,
	`shipping_id` INT,
	`shipping_number` VARCHAR(50) NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;