import { mapViewModel } from '../utils/helpers';
export const getList = async (req, res, next) => {
  req.models.item.find({isDeleted:0}, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
}

export const get = async (req, res, next) => {
  req.models.item.find({isDeleted:0, id: req.params.id}, (err, results) => {
    if(results && results.length === 1)
    res.send(mapViewModel(results)[0]);
    res.end();
  });
}