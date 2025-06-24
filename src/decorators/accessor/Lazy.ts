/**
 * Lazy initialization
 * “I’ll do the work only when you first ask for it, then I’ll remember it.”
 */
function Lazy<This, Return>(
  target: (this: This) => Return,
  context: ClassGetterDecoratorContext<This, Return>
) {
  return function (this: This): Return {
    const value = target.call(this);
    Object.defineProperty(this, context.name, { value, enumerable: true });
    return value;
  };
}

export default Lazy;
