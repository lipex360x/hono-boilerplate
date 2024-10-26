export class Password {
  private $value: string

  constructor(value: string) {
    this.$value = value
  }

  static async hash(password: string) {
    return Bun.password.hash(password)
  }

  async verify(password: string) {
    return Bun.password.verify(password, this.$value)
  }

  get value() {
    return this.$value
  }
}
