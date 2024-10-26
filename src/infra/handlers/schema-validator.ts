import { zValidator } from '@hono/zod-validator'
import type { ValidationTargets } from 'hono'
import type { ZodType } from 'zod'

export const schemaValidator = (type: keyof ValidationTargets, schema: ZodType) => {
  return zValidator(type, schema, (result, c) => {
    if (result.success) return
    const zodError = JSON.parse(String(result.error))
    console.error(zodError)
    const errors = []
    for (const error of zodError) {
      errors.push({ parameter: error.path[0], message: error.message })
    }
    return c.json(errors, 422)
  })
}
