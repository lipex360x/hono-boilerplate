export type PaginatedOutputRepository<T> = {
  registers: number
  lastPage: number
  data: T
}

export type PaginatedOutputUsecase<T> = {
  page: number
  perPage: number
  registers: number
  lastPage: number
  data: T
}
