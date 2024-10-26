import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { userTable } from './user-table.schema'

export const sessionTable = pgTable('session', {
  sessionId: text('session_id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.userId, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull(),
})
