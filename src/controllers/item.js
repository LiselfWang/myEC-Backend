import { mapViewModel } from '../utils/helpers';
export const getList = async (req, res, next) => {
  req.models.item.find({isDeleted:0}, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
  res.send(addressList)
  res.end();
}