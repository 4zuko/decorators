function Deprecated<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.warn(`Method '${methodName}' is deprecated.`);
    return target.call(this, ...args);
  }

  return replacementMethod;
}

export default Deprecated
