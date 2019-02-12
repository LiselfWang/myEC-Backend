import orm from 'orm';


const baseModel = {
  id: Number,
  isDeleted: Number,
  modifyBy: String,
  modifyDate: Date,
  createBy: String,
  createDate: Date,
};

export default orm.express("mysql://admin:3793381lin@siteo.cbmvxfudhnyb.ap-southeast-1.rds.amazonaws.com/siteo", {
	define: function (db, models, next) {
		models.shipping = db.define("t_shipping", {
      shippingName: String,
      ...baseModel,
    });

    models.item = db.define("t_item", {
      itemNumber: String,
      itemName: String,
      itemPic: String,
      itemPrice: Number,
      ...baseModel,
    });

    models.address = db.define("t_address", {
      contactName: String,
      contactPhone: String,
      address: String,
      ...baseModel,
    });

    models.order = db.define("t_order", {
      orderNumber: String,
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
      ...baseModel,
    });

		next();
	}
});