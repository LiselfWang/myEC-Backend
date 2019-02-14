import reduce from 'lodash/reduce';
import map from 'lodash/map';
import { baseModel } from '../middlewares/dbAccess';
import { generateOrderNumber } from '../utils/helpers';
import { mapViewModel } from '../utils/helpers';
export const getList = async (req, res, next) => {
  req.models.order.find({isDeleted:0}, (err, results) => {
    res.send(mapViewModel(results));
    res.end();
  });
  res.send(addressList)
  res.end();
}


export const submit = async (req, res, next) => {
  console.log('req.body',req.body);
  try {
    const addressId = parseInt(req.body.addressId);
    const order = {
      ...baseModel,
      orderNumber: generateOrderNumber(),
      message: req.body.message,
    }

    req.models.address.find({id:addressId}, (err, [result]) => {
      if(!result) {
        res.status(412).send('Invalid addressId');
        res.end();
        return;
      }

      order.contactName = result.contactName;
      order.contactPhone = result.contactPhone;
      order.address = result.address;

      const paramItemList = req.body.items;
      const itemNumbers = map(paramItemList, item => {
        return item.itemNumber;
      });

      req.models.item.find({itemNumber: itemNumbers}, (err, items) => {
        if(!items || items.length === 0) {
          res.status(412).send('Invalid itemNumber');
          res.end();
          return;
        }

        let totalAmount = 0;
        for (let index = 0; index < items.length; index++) {
          const item = items[index];
          totalAmount += item.itemPrice * paramItemList[index].quantity;
        }
    
        order.totalAmount = totalAmount;
        order.submitDate = new Date();
        order.payDate = new Date();

        req.models.order.create(order, (err, createdOrder) => {
          createOrderItemCallback(req, res, items, createdOrder, paramItemList, 0);
        });
      });
    });
  } catch {
    res.sendStatus(500);
    res.end();
  }
}

const createOrderItemCallback = (req, res, items, createdOrder, paramItemList, index) => {
  if(items.length <= index) {
    res.send(createdOrder);
    res.end();
  } else {
    const item  = items[index];

    const orderItem = {
      ...baseModel,
      orderNumber: createdOrder.orderNumber,
      itemNumber: item.itemNumber,
      quantity:  paramItemList[index].quantity,
      itemPrice: item.itemPrice,
    }

    req.models.orderItem.create(orderItem, (err, result) => {
        createOrderItemCallback(req, res, items, createdOrder, paramItemList, index + 1);
    });
  }
}