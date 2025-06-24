export type Constructor<T = {}> = new (...args: unknown[]) => T;

export interface ILogger {
  log(msg: string): void;
}
