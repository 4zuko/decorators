import { localStorage } from './mocks'

class LocalStorage {
  setItem<T>(key: string, value: T): void {
    const serialized = JSON.stringify(value)
    localStorage.setItem(key, serialized)
  }

  getItem<T>(key: string, ctor?: new (...args: any[]) => T): T | null {
    const value = localStorage.getItem(key)

    if (value === null) return null

    try {
      const parsed = JSON.parse(value)

      if (ctor) {
        // Rebuild as instance
        return Object.assign(new ctor(parsed) as object, parsed)
      }

      return parsed as T
    } catch {
      return null
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}

export default LocalStorage
