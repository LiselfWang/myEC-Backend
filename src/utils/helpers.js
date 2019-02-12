
import map from 'lodash/map';

export const generateOrderNumber = () => {
  return `O-${new Date().getTime()}${parseInt(Math.random() * 10000)}`;
};

export const mapViewModel = (dbModels) => {
  return map(dbModels, dbModels => {
    dbModels['isDeleted'] = undefined;
    dbModels['createBy'] = undefined;
    dbModels['createDate'] = undefined;
    dbModels['modifyBy'] = undefined;
    dbModels['modifyDate'] = undefined;
    return dbModels;
  })
};
