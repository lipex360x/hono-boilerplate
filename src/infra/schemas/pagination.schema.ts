import { z } from 'zod'

export const orderSchema = z.enum(['asc', 'desc'])
export const sortBySchema = z.enum(['createdAt'])

export const paginationSchema = z.object({
  page: z.number({ coerce: true, message: 'invalid page' }).optional(),
  perPage: z.number({ coerce: true, message: 'invalid per page' }).optional(),
  sortBy: sortBySchema.optional().default('createdAt'),
  orderBy: orderSchema.optional().default('desc'),
})

export type PaginationSchema = z.infer<typeof paginationSchema>
export type OrderBySchema = z.infer<typeof orderSchema>
export type SortBySchema = z.infer<typeof sortBySchema>
