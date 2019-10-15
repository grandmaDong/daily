import * as KoaRouter from 'koa-router';

const testRouter = new KoaRouter()

testRouter.get('/test/:id/testpage', (ctx) => {
  // 获取参数
  // const p = ctx.params
  // console.log(p)
  ctx.body = 'Hello Koa Test Router!'
})

export const testRoutes = testRouter.routes();