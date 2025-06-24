import type { Nullable } from './types'

const store = new Map<string, string>()

export const localStorage = {
  getItem(key: string): Nullable<string> {
    return store.get(key) || null
  },
  setItem(key: string, value: string) {
    store.set(key, String(value))
  },
  removeItem(key: string) {
    store.delete(key)
  },
  clear() {
    store.clear()
  },
}
