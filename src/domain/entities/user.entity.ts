import { uid } from 'uid'

import { Password } from '../vo'

export class User {
  private $password: Password

  constructor(
    readonly id: string,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly username: string,
    password: string,
  ) {
    this.$password = new Password(password)
  }

  static async create(username: string, password: string) {
    const id = uid(32)
    const createdAt = new Date()
    const updatedAt = new Date()
    const passwordHash = await Password.hash(password)
    return new User(id, createdAt, updatedAt, username, passwordHash)
  }

  async verifyPassword(password: string) {
    return this.$password.verify(password)
  }

  get password() {
    return this.$password.value
  }
}
