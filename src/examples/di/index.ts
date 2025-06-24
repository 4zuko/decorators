import CustomLogger from "./CustomLogger";
import "./init"
import Logger from "./Logger";

const logger = new Logger();
logger.log('Hi there!');

console.log(logger instanceof CustomLogger)
