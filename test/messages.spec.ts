import * as zaapi from '../lib'
import { expect, test } from 'vitest'
import dotenv from 'dotenv'
import { initializeConfig } from '../lib/config'

dotenv.config()

initializeConfig({
  Z_API_INSTANCE_ID: process.env.Z_API_INSTANCE_ID || '',
  Z_API_INSTANCE_TOKEN: process.env.Z_API_ISTANCE_TOKEN || '',
  Z_API_CLIENT_TOKEN: process.env.Z_API_CLIENT_TOKEN || ''
})

test('should send a text message', async () => {
  const response = await zaapi.messages.sendText({
    phone: process.env.TEST_PHONE_NUMBER || '',
    message: 'Hello world!'
  })

  expect(response).toHaveProperty('zaapId')
  expect(response).toHaveProperty('messageId')
  expect(response).toHaveProperty('id')
})
