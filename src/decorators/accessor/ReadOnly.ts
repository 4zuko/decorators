function ReadOnly<This, Return>(
  target: ClassAccessorDecoratorTarget<This, Return>,
  context: ClassAccessorDecoratorContext<This, Return>
) {
  if (context.kind !== 'accessor') return;

  const result: ClassAccessorDecoratorResult<This, Return> = {
    get(this: This): Return {
      return target.get.call(this);
    },
    set(this: This, value: Return): void {
      throw new Error(`Cannot set read-only property: ${String(context.name)}`);
    }
  };

  return result
}

export default ReadOnly
