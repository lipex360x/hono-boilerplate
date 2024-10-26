import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import type { z } from 'zod'

export const userTable = pgTable('user', {
  id: text('id').primaryKey(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
})

export const userSchema = createInsertSchema(userTable, {
  id: (schema) => schema.id.min(32),
  username: (schema) => schema.username.min(1),
  password: (schema) => schema.password.min(1),
})

export type UserSchema = z.infer<typeof userSchema>
