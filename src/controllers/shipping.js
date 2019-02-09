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
  res.send(shippingList)
  res.end();
}