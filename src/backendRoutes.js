import Express from 'express';
import { getList as getShippingList, add as addShipping } from './controllers/shipping';
const router = Express.Router();

router.get('/shipping', getShippingList);
router.post('/shipping', addShipping);

export default router;