const itemList = [
  {
    itemNumber: 'ITEM-1000001',
    itemName: 'iphone X 64G Silver',
    itemPrice: 8808.00,
    itemPic: 'static/iphonex.jpg',
  },
  {
    itemNumber: 'ITEM-1000002',
    itemName: '芝华士（Chivas）洋酒 12年 苏格兰 威士忌 1000ml',
    itemPrice: 260.00,
    itemPic:  'static/chivas.jpg',
  }
]


export const getList = async (req, res, next) => {
  res.send(itemList)
  res.end();
}