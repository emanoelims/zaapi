import { getConfig } from '../lib/config'

function getURL(path: string) {
  const { Z_API_INSTANCE_ID: instanceID, Z_API_INSTANCE_TOKEN: instanceToken } = getConfig()
  return `https://api.z-api.io/instances/${instanceID}/token/${instanceToken}/${path}`
}

export async function post<T>(path: string, body: any): Promise<T> {
  const url = getURL(path)
  const { Z_API_CLIENT_TOKEN: clientToken } = getConfig()
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Client-Token': clientToken
    }
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return (await response.json()) as Promise<T>
}
