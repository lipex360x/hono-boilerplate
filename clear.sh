rm -rf src/infra/database/schemas/user-table.schema.ts src/infra/database/schemas/index.ts
touch src/infra/database/schemas/index.ts

rm -rf src/domain/entities/user.entity.ts src/domain/entities/index.ts
touch src/domain/entities/index.ts


cat > src/infra/routes/main.route.ts << EOF
import { Hono } from 'hono'

const route = new Hono()

route.get('/', (c) => c.body('hello world'))

export { route }
EOF