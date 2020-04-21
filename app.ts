import "reflect-metadata";
import * as Koa from 'koa' 
import {createConnection} from "typeorm";
import * as bodyParser from 'koa-bodyparser'

import { routes } from './src/router/index'


createConnection().then(() => {

  // console.log("Here you can setup and run express/koa/any other framework.");
  const app = new Koa()
  app.use(
    bodyParser({
      extendTypes: {
        form: ['application/x-www-form-urlencoded'],
        text: ['text/xml', 'application/xml'],
      },
      enableTypes: ['json', 'text', 'form'],
    }),
  );

  app.use(routes)
  
  app.listen(9000, ()=> {
    console.log('the app is running at: http://localhost:9000')
  });

}).catch(error => 
    console.log(error)
  );
