import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { postTable } from './post-table.schema'
import { userTable } from './user-table.schema'

export const postUpvoteTable = pgTable('post_upvote', {
  postUpvoteId: text('post_upvote_id').primaryKey(),
  postId: text('post_id')
    .notNull()
    .references(() => postTable.postId, { onDelete: 'cascade' }),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.userId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})
