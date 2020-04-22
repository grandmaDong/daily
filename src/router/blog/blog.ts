import * as KoaRouter from 'koa-router';
import {getManager} from "typeorm";
import { Blog } from '../../entity/blog/entities'

const blogRouter = new KoaRouter()

blogRouter.get('/list', async ctx => {
  // 获取博客列表
  const params = ctx.params
  console.log('params', params)
  console.log('query', ctx.query)
  const query = ctx.query
  console.log(query.ad);
  // get a blog repository to perform operations with blog
  const blogRepository = getManager().getRepository(Blog);

  // // load all blogs
  const blogs = await blogRepository.find();

  // // return loaded blogs
  ctx.body = blogs;
})

blogRouter.post('/addblog', async ctx => { // 新增博客
  // 获取参数
  const { title, content } = ctx.request.body;
  if (!title.length) {
    ctx.throw(400, 'title can not be null')
  }

  if (!content.length) {
    ctx.throw(400, 'content can not be null')
  }

  const blogRepository = getManager().getRepository(Blog);
  const newBlog = await blogRepository.save({
    title,
    content,
    userId: 202001
  })
  
  ctx.body =`新增博客- ${newBlog.title}: ${newBlog.content}`
})

export const blogRoutes = blogRouter.routes();