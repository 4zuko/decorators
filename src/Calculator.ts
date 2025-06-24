import { collector } from "./decorators/class/collector";
import Log from "./decorators/method/Log";
import Add from "./decorators/property/Add";

@collector.install
class Calculator {
  @Add(2)
  @Add(1)
  x = 1

  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

export default Calculator
