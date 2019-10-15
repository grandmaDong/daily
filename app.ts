import "reflect-metadata";
import * as Koa from 'koa' 
import {createConnection} from "typeorm";

import { routes } from './src/router/index'


createConnection().then(() => {

  // console.log("Here you can setup and run express/koa/any other framework.");
  const app = new Koa()
  
  app.use(routes)
  app.listen(3000, ()=> {
    console.log('the app is running at: http://localhost:3000')
  });

}).catch(error => 
    console.log(error)
  );
