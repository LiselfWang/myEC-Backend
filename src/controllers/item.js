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
  },
  {
    itemNumber: 'ITEM-1000003',
    itemName: '罗兰（Roland）电钢琴FP-30便携式 88键重锤成人演奏 儿童初学入门带蓝牙数码电子电钢 FP30WH白色全套(含木架+三踏板)+全套配件',
    itemPrice: 3990.00,
    itemPic:  'static/piano.jpg',
  }
]


export const getList = async (req, res, next) => {
  res.send(itemList)
  res.end();
}