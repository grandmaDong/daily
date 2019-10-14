import * as Koa from 'koa' 

import { routes } from './src/router/index'

const app = new Koa()


app.use(routes)

app.listen(3000, ()=> {
  console.log('the app is running at: http://localhost:3000')
});