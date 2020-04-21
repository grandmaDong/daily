###参数的研究
> 前端传递参数的方式
1. get 方法：
  1. http://localhost:9000/blog/list/:Id 通过使用字符串拼接的方式传递
  后端获取的方式：
  ctx.params 中获取
  2. http://localhost:9000/blog/list?number=0&size=10&flag=common
  通过使用字符串拼接的方式
  后端获取方式： ctx.query 中获取

2. post 方法：
  1. 前端通过请求体传递 后端获取方式： 通过koa-bodyparser 中间件 ctx.request.body