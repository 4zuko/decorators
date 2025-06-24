import { ClassOverrideMap } from "./config";
import type { Constructor } from "./types";

// Add polyfill for metadata support in TypeScript
(Symbol as any).metadata ??= Symbol.for('Symbol.metadata')

export default function Injectable<Class extends Constructor>(
  value: Class,
  context: ClassDecoratorContext<Class>
): Class | void {
  const replacement = ClassOverrideMap.get(value.name);

  if (!replacement) return;

  context.metadata["replace-constructor"] = replacement;

  return class {
    constructor(...args: unknown[]) {
      return new replacement!(...args);
    }
  } as any as Class;
}
