import 'core-js'

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

import { route } from './infra/routes'

const app = new Hono()
app.use('*', cors())
app.use(logger())

app.route('/', route)

export { app }
