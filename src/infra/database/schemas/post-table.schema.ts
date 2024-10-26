import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { userTable } from './user-table.schema'

export const postTable = pgTable('post', {
  postId: text('post_id').primaryKey(),
  authorId: text('author_id')
    .notNull()
    .references(() => userTable.userId),
  title: text('title').notNull(),
  content: text('content').notNull(),
  commentCounter: integer('comment_counter').default(0),
  points: integer('points').default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})
