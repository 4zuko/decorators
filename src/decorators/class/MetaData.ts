// Add polyfill for metadata support in TypeScript
// (Symbol as any).metadata ??= Symbol.for('Symbol.metadata')
if (typeof Symbol.metadata === 'undefined') {
  (Symbol as any).metadata = Symbol.for('Symbol.metadata')
}

type Constructor<T = {}> = new (...args: unknown[]) => T

export default function MetaData(key: string, value: string): Function {
  return function <Class extends Constructor>(
    target: Class,
    context: ClassDecoratorContext<Class>
  ) {
    context.metadata[key] = value
  }
}
