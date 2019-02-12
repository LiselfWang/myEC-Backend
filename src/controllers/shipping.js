const shippingList = [
  {
    id: '1',
    name: '顺丰速递'
  },
  {
    id: '2',
    name: '韵达快递'
  },
  {
    id: '3',
    name: '圆通速递'
  },
  {
    id: '4',
    name: '天天快递'
  },
];


export const getList = async (req, res, next) => {
  req.models.shipping.find({isDeleted:0}, (err, results) => {
    res.send(results);
    res.end();
  });
}

export const add = async (req, res, next) => {
  const newShipping = {
    shippingName: "韵达快递"
  }
  req.models.shipping.create(newShipping, (err, results) => {
    res.send(results);
    res.end();
  });
}