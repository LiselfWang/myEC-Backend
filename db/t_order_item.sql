create table t_order_item(
	`id` INT NOT NULL AUTO_INCREMENT,
	`orderNumber` VARCHAR(50) NOT NULL,
	`itemNumber` VARCHAR(50) NOT NULL,
	`quantity` INT NOT NULL,
	`itemPrice` DECIMAL(10,2) NOT NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;