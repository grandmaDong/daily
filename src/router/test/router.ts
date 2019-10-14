import * as KoaRouter from 'koa-router';

const testRouter = new KoaRouter()

testRouter.get('/test/testpage', (ctx, next) => {
  console.log('test router')
  ctx.body = 'Hello Koa Test Router!'
})

export const testRoutes = testRouter.routes();