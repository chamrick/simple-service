import Koa from 'koa';
import Router from 'koa-router';
import { rootRouteHandler, statusRouteHandler } from './routes/index.js';

const app = new Koa();
const router = new Router();

router.get('/', rootRouteHandler);
router.get('/status', statusRouteHandler);

app.use(router.routes());
app.listen(3000);

