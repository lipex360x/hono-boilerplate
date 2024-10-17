import { Hono } from 'hono'

import { HelloController } from '../controllers'

const route = new Hono()

const helloController = new HelloController()

route.get('/', helloController.handler)

export { route }
