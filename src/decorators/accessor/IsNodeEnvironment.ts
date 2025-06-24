interface TargetThis<T> {
  [Symbol.metadata]: DecoratorMetadata | null
  new (): T
}

function IsNodeEnvironment(): Function {
  return function <This extends TargetThis<This>, Return>(target: ClassAccessorDecoratorTarget<This, Return>, context: ClassAccessorDecoratorContext<This, Return>) {
    if (typeof window === 'undefined') return target

    const result: ClassAccessorDecoratorResult<This, Return> = {
      get(this: This) {
        // const { name } = this
        const message = this.prototype.getErrorMessage()
        throw new Error(message)
      },
      set(this: This) {
        // const metadata = this[Symbol.metadata]
        // const name = metadata?.name as string
        const message = this.prototype.getErrorMessage()
        throw new Error(message)
      },
    }

    return result
  }
}

export default IsNodeEnvironment
