create table t_order(
	`id` INT NOT NULL AUTO_INCREMENT,
	`orderNumber` VARCHAR(50) NOT NULL,
	`orderStatus` VARCHAR(20) NOT NULL,
	`totalAmount` DECIMAL(10,2) NOT NULL,
	`message` VARCHAR(500) NULL,
	`contactName` VARCHAR(50) NULL,
	`contactPhone` VARCHAR(50) NULL,
	`address` VARCHAR(50) NULL,
	`userAccount` VARCHAR(50) NOT NULL,
	`shippingId` INT,
	`shippingName` VARCHAR(50) NULL,
	`shippingNumber` VARCHAR(50) NULL,
	`shippingDate` DATETIME NULL,
	`submitDate` DATETIME NOT NULL,
	`payDate` DATETIME NULL,
	`isDeleted` INT NOT NULL DEFAULT 0,
	`modifyDate` DATETIME NOT NULL,
	`modifyBy` VARCHAR(50) NOT NULL,
	`createDate` DATETIME NOT NULL,
	`createBy` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `id` )
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;