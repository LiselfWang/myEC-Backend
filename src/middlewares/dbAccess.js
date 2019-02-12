import orm from 'orm';

export default orm.express("mysql://admin:3793381lin@siteo.cbmvxfudhnyb.ap-southeast-1.rds.amazonaws.com/siteo", {
	define: function (db, models, next) {
		models.shipping = db.define("t_shipping", {
      id: Number,
      shippingName: String,
    });
		next();
	}
});