import Express from 'express';
import path from 'path';
//import redis from 'redis';

// const client = redis.createClient(6379,'redis-service');

// client.set('hello','This is a value!');
import middlewares from './middlewares';

import frontRoutes from './frontRoutes';
import backendRoutes from './backendRoutes';


const app = new Express();
const port = process.env.PORT || 8888; 

app.get('/heartbeat', (req, res) => {
  res.send('Hello world');
  res.end();
});

app.use('/static', Express.static(path.join(process.cwd(), 'static'), { maxAge: '1d' }));

app.use(middlewares.validToken);
app.use('/api/front', frontRoutes);
app.use('/api/backend', backendRoutes);

app.listen(port, () => {
  const message = `Server listening on port:${port}`;

  console.log(message);
});
