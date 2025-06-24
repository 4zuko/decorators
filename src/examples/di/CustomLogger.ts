import { ILogger } from "./types";

class CustomLogger implements ILogger {
  log(msg: string) {
    console.log('CustomLogger:', msg);
  }
}

export default CustomLogger;
