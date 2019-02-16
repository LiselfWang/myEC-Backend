import orm from 'orm';


const baseModelDefine = {
  id: Number,
  isDeleted: Number,
  modifyBy: String,
  modifyDate: Date,
  createBy: String,
  createDate: Date,
};

export const baseModel = {
  isDeleted: 0,
  modifyBy: 'System Default',
  modifyDate: new Date(),
  createBy: 'System Default',
  createDate: new Date(),
}

export default orm.express("mysql://admin:3793381lin@siteo.cbmvxfudhnyb.ap-southeast-1.rds.amazonaws.com/siteo", {
	define: function (db, models, next) {
		models.shipping = db.define("t_shipping", {
      ...baseModelDefine,
      shippingName: String,
    });

    models.item = db.define("t_item", {
      ...baseModelDefine,
      itemNumber: String,
      itemName: String,
      itemPic: String,
      itemPrice: Number,
    });

    models.address = db.define("t_address", {
      ...baseModelDefine,
      contactName: String,
      contactPhone: String,
      address: String,
      isDefault: Number,
    });

    models.order = db.define("t_order", {
      ...baseModelDefine,
      orderNumber: String,
      orderStatus: String,
      totalAmount: Number,
      message: String,
      contactName: String,
      contactPhone: String,
      address: String,
      shippingId: Number,
      shippingName: String,
      shippingNumber: String,
      shippingDate: Date,
      submitDate: Date,
      payDate: Date,
    });

    models.orderItem = db.define("t_order_item", {
      ...baseModelDefine,
      orderNumber: String,
      itemNumber: String,
      itemName: String,
      itemPic: String,
      quantity: Number,
      itemPrice: Number,
    });

		next();
	}
});