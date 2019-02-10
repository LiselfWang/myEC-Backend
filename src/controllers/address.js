const addressList = [
  {
    id:1,
    contactName: '林立',
    contactPhone: '1859191****',
    address: '陕西省西安市雁塔区天谷八路环普产业科技园',
    isDefault: false,
  },
  {
    id:2,
    contactName: '林立',
    contactPhone: '1859191****',
    address: '陕西省西安市灞桥区长乐东路御锦城',
    isDefault: true,
  },
  {
    id:3,
    contactName: '王俐力',
    contactPhone: '1809118****',
    address: '陕西省西安市灞桥区长乐东路御锦城',
    isDefault: false,
  },
];


export const getList = async (req, res, next) => {
  res.send(addressList)
  res.end();
}