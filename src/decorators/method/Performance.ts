function Performance<
  This,
  Args extends any[],
  Return
>(
  target: (this: This, ...args: Args) => Promise<Return>,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>
) {
  const methodName = String(context.name);

  async function replacementMethod(this: This, ...args: Args): Promise<Return> {
    const start = performance.now();
    const result = await target.call(this, ...args);
    const end = performance.now();

    const duration = end - start;
    console.log(`Execution time for '${methodName}': ${duration.toFixed(2)}ms`);

    return result;
  }

  return replacementMethod;
}

export default Performance;
