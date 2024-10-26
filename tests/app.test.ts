import { beforeAll } from 'bun:test'

import { app } from '@/app'

beforeAll(() => app.mount('/', () => new Response(null)))
