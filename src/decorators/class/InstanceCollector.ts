type Constructor<T = {}> = new (...args: any[]) => T;

class InstanceCollector {
  instances = new Set();

  install = <Class extends Constructor>(
    Value: Class,
    context: ClassDecoratorContext<Class>
  ) => {
    const _this = this;

    return class extends Value {
      constructor(...args: any[]) {
        super(...args);
        _this.instances.add(this);
      }
    };
  };
}

export default InstanceCollector;
