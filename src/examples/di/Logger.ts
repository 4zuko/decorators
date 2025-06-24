import Injectable from "./Injectable";
import { ILogger } from "./types";

@Injectable
class Logger implements ILogger{
  log(msg: string) {
    console.log('Logger:', msg);
  }
}

export default Logger;
