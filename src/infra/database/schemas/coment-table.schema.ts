import { relations } from 'drizzle-orm'
import type { AnyPgColumn } from 'drizzle-orm/pg-core'
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import type { z } from 'zod'

import { commentUpvoteTable } from './comment-upvote-table.schema'
import { postTable } from './post-table.schema'
import { userTable } from './user-table.schema'

export const commentTable = pgTable('comment', {
  commentId: text('comment_id').primaryKey(),
  postId: text('post_id')
    .notNull()
    .references(() => postTable.postId, { onDelete: 'set null' }),
  authorId: text('author_id')
    .notNull()
    .references(() => userTable.userId, { onDelete: 'set null' }),
  content: text('content').notNull(),
  parentId: text('parent_id').references((): AnyPgColumn => commentTable.commentId),
  depth: integer('depth').notNull().default(0),
  points: integer('points').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export const commentRelations = relations(commentTable, ({ one, many }) => ({
  parentComment: one(commentTable, {
    fields: [commentTable.parentId],
    references: [commentTable.commentId],
    relationName: 'parentComment',
  }),
  childComment: many(commentTable, {
    relationName: 'parentComment',
  }),
  commentUpvotes: many(commentUpvoteTable, {
    relationName: 'commentUpvotes',
  }),
}))

export const commentTableSchema = createInsertSchema(commentTable)

export type CommentTable = z.infer<typeof commentTableSchema>
