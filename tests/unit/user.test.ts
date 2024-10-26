import { faker } from '@faker-js/faker'
import { describe, expect, test } from 'bun:test'

import { User } from '@/domain/entities'

describe('UserEntity', () => {
  test('should create a user', async () => {
    const input = {
      username: faker.internet.username(),
      password: faker.internet.password(),
    }
    const output = await User.create(input.username, input.password)
    expect(output.id).toBeDefined()
  })

  test('should validate a password', async () => {
    const input = {
      username: faker.internet.username(),
      password: faker.internet.password(),
    }
    const output = await User.create(input.username, input.password)
    expect(output.verifyPassword(input.password)).toBeTruthy()
  })

  test('should create different encrypted passwords', async () => {
    const input = {
      username: faker.internet.username(),
      password: faker.internet.password(),
    }
    const user1 = await User.create(input.username, input.password)
    const user2 = await User.create(input.username, input.password)
    expect(user1.password).not.toEqual(user2.password)
  })
})
