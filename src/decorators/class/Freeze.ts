type Constructor<T = {}> = new (...args: any[]) => T

export default function Freeze<Class extends Constructor>(
  Value: Class,
  context: ClassDecoratorContext<Class>
) {
  return class extends Value {
    constructor(...args: any[]) {
      super(...args);
      Object.freeze(this);
    }
  };
}
