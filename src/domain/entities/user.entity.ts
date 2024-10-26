import { uid } from 'uid'

import { Password } from '../vo'

export class User {
  private $password: Password

  constructor(
    readonly userId: string,
    readonly username: string,
    password: string,
  ) {
    this.$password = new Password(password)
  }

  static async create(username: string, password: string) {
    const userId = uid(32)
    const passwordHash = await Password.hash(password)
    return new User(userId, username, passwordHash)
  }

  async verifyPassword(password: string) {
    return this.$password.verify(password)
  }

  get password() {
    return this.$password.value
  }
}
