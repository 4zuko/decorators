import IsNodeEnvironment from '../decorators/accessor/IsNodeEnvironment'
import MetaData from '../decorators/class/MetaData'
import type { ErrorHandler } from '../types'

@MetaData('name', 'NodeLocaleHelper')
@MetaData('version', '1.2.3')
class NodeLocaleHelper implements ErrorHandler {
  @IsNodeEnvironment()
  static accessor locale: string

  /**
   * Generates an error message indicating that a specific class cannot be used in a browser environment.
   * @returns {string} The error message string.
   */
  getErrorMessage(): string {
    return `Cannot use ${this.constructor.name} class in a browser environment!`
  }
}

export default NodeLocaleHelper
