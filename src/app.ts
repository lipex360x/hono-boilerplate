import 'core-js'

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

import { mainRoutes } from './infra/routes'

const app = new Hono()

app.use('*', cors(), logger())

app.route('/', mainRoutes)

export { app }
