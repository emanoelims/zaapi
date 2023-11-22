export type UserConfig = {
  Z_API_CLIENT_TOKEN: string
  Z_API_INSTANCE_ID: string
  Z_API_INSTANCE_TOKEN: string
}

let config = {} as UserConfig

export function initializeConfig(userConfig: UserConfig) {
  config = userConfig
}

export function getConfig(): UserConfig {
  return config
}
