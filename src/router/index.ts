
import * as Router from 'koa-router'

import { testRoutes } from './test/router'
import { blogRoutes } from './blog/blog'

const router = new Router()

router.use('/api', testRoutes)
router.use('/blog', blogRoutes)

export const routes = router.routes();

