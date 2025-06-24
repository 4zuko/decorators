// A higher-order function acting as a decorator
export default function withLogging(fn: Function): Function {
  return function (...args: unknown[]) {
    console.log(`Calling ${fn.name} with arguments:`, args);
    const result = fn.call(this, ...args);
    console.log(`Result:`, result);
    return result;
  };
}
