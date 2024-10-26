export class Mediator {
  private handlers: Map<string, Function> = new Map()

  register(event: string, callback: Function) {
    this.handlers.set(event, callback)
  }

  async notify<T>(event: string, data: T) {
    const handler = this.handlers.get(event)
    if (!handler) return
    await handler(data)
  }
}
