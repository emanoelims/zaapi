import * as zaapi from '../lib'
import { expect, test } from 'vitest'
import dotenv from 'dotenv'

dotenv.config()

test('should send a text message', async () => {
  const response = await zaapi.messages.sendText({
    phone: process.env.TEST_PHONE_NUMBER || '',
    message: 'Hello world!'
  })

  expect(response).toHaveProperty('zaapId')
  expect(response).toHaveProperty('messageId')
  expect(response).toHaveProperty('id')
})
