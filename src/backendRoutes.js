import Express from 'express';
import { getList as getShippingList, add as addShipping } from './controllers/shipping';
import { getList as getOrderList } from './controllers/order';
const router = Express.Router();

router.get('/shipping', getShippingList);
router.post('/shipping', addShipping);
router.get('/order', getOrderList);

export default router;