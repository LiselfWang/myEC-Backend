import { mapViewModel } from '../utils/helpers';

export const getList = async (req, res, next) => {
  req.models.shipping.find({isDeleted:0}, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}

export const add = async (req, res, next) => {
  const newShipping = {
    shippingName: req.param("shippingName")
  }
  req.models.shipping.create(newShipping, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}