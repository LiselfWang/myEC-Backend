import Express from 'express';
import { getList as getShippingList } from './controllers/shipping';
const router = Express.Router();

router.get('/shipping', getShippingList);

export default router;