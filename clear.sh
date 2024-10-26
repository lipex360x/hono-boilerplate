rm -rf src/infra/database/schemas/user-table.schema.ts src/infra/database/schemas/index.ts
touch src/infra/database/schemas/index.ts

rm -rf src/domain/entities/user.entity.ts src/domain/entities/index.ts
rm -rf src/domain/vo
rm -rf tests/unit
touch src/domain/entities/index.ts

rm -rf src/infra/routes/main.routes.ts
touch src/infra/routes/main.routes.ts

cat > src/infra/routes/main.route.ts << EOF
import { Hono } from 'hono'

const mainRoutes = new Hono()

mainRoutes.get('/', (c) => {
  return c.body('hello hono boilerplate')
})

export { mainRoutes }
EOF