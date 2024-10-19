import { defineConfig } from 'drizzle-kit'

import { env } from '@/infra/schemas'

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/infra/database/schemas/index.ts',
  out: './server/infra/database/migrations',
  dbCredentials: { url: env.DATABASE_URL },
})
