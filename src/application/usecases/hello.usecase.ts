import { Message } from '@/domain/entities'

export class HelloUsecase {
  async execute(): Promise<Output> {
    const message = new Message('hello world')
    return { value: message.text }
  }
}

type Output = {
  value: string
}
