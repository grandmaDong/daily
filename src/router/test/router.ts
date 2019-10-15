import * as KoaRouter from 'koa-router';

import { operateData } from '../../controller/testTmp/controller'

const testRouter = new KoaRouter()

testRouter.get('/test/:id/testpage', operateData)

export const testRoutes = testRouter.routes();