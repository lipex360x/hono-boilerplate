import type { Context } from 'hono'
import { container } from 'tsyringe'

import { HelloUsecase } from '@/application/usecases'

export class HelloController {
  async handler(c: Context) {
    const usecase = container.resolve(HelloUsecase)
    const output = await usecase.execute()
    return c.json(output)
  }
}
