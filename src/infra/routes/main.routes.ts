import { Hono } from 'hono'

const mainRoutes = new Hono()

mainRoutes.get('/', (c) => {
  return c.body('hello boilerplate')
})

export { mainRoutes }
