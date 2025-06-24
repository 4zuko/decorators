function Add(value: number) {
  return function <T>(
    target: T,
    context: ClassFieldDecoratorContext<T, number>
  ) {
    return function (this: T, originalValue: number) {
      console.log('Add decorator called with value:', value);
      return originalValue + value;
    };
  };
}

export default Add;
