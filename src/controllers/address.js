const addressList = [
  {
    contactName: '林立',
    contactPhone: '18591919101',
    address: '陕西省西安市雁塔区天谷八路环普产业科技园E座6F',
    isDefault: true,
  },
  {
    contactName: '林立',
    contactPhone: '18591919101',
    address: '陕西省西安市灞桥区长乐东路御锦城三期三号楼一单元1102室',
    isDefault: false,
  },
  {
    contactName: '王俐力',
    contactPhone: '18091185557',
    address: '陕西省西安市灞桥区长乐东路御锦城三期三号楼一单元1102室',
    isDefault: false,
  },
];


export const getList = async (req, res, next) => {
  res.send(addressList)
  res.end();
}