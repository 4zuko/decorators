import Lazy from './decorators/accessor/Lazy'
import Performance from "./decorators/method/Performance";
import Deprecated from "./decorators/property/Deprecated";
import ReadOnly from "./decorators/accessor/ReadOnly";

class Example {
  private _expensiveValue: number | null = null;

  @Lazy
  get expensiveValue(): number {
    this._expensiveValue ??= this.computeExpensiveValue();
    return this._expensiveValue;
  }

  computeExpensiveValue(): number {
    // Expensive computation here…
    console.log('Computing...'); // Only call once

    return 42;
  }

  @Performance
  async computeExpensiveValueAsync(): Promise<number> {
    // Expensive computation here…
    // Simulate delay
    return new Promise(resolve => setTimeout(() => resolve(100), 2000));
  }

  @Deprecated
  getAllUsers(): string[] {
    // Simulate fetching users from a database or API
    return ['Alice', 'Bob', 'Charlie'];
  }

  @ReadOnly
  accessor x: number = 1
}

export default Example
