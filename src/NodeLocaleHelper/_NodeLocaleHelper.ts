class NodeLocaleHelper {
  private static _locale: string

  static set locale(locale: string) {
    NodeLocaleHelper.checkEnvironment()
    NodeLocaleHelper._locale = locale
  }

  static get locale(): string {
    NodeLocaleHelper.checkEnvironment()
    return NodeLocaleHelper._locale
  }

  private static get errorMessage(): string {
    return `Cannot use ${this.name} class in a browser environment!`
  }

  private static checkEnvironment(): void {
    if (typeof window === 'undefined') return

    const message = NodeLocaleHelper.errorMessage
    throw new Error(message)
  }
}

export default NodeLocaleHelper
