import { post } from '../support/api'

export type SendTextRequest = {
  phone: string
  message: string
}

export type SendTextResponse = {
  zaapId: string
  messageId: string
  id: string
}

export async function sendText(request: SendTextRequest): Promise<SendTextResponse> {
  return await post('/send-text', request)
}
