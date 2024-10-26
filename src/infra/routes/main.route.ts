import { Hono } from 'hono'

const route = new Hono()

route.get('/', (c) => {
  return c.body('hello boilerplate')
})

export { route }
