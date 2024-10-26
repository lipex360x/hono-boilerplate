import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { commentTable } from './coment-table.schema'
import { userTable } from './user-table.schema'

export const commentUpvoteTable = pgTable('comment_upvote', {
  commentUpvoteId: text('comment_upvote_id').primaryKey(),
  commentId: text('comment_id')
    .notNull()
    .references(() => commentTable.commentId, { onDelete: 'cascade' }),
  authorId: text('author_id')
    .notNull()
    .references(() => userTable.userId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const commentUpvoteRelations = relations(commentUpvoteTable, ({ one }) => ({
  comment: one(commentTable, {
    fields: [commentUpvoteTable.commentId],
    references: [commentTable.commentId],
    relationName: 'commentUpvotes',
  }),
}))
