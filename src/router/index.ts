
import * as Router from 'koa-router'

import { testRoutes } from './test/router'

const router = new Router()

router.use('/api', testRoutes)

export const routes = router.routes();

