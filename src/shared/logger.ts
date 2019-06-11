import * as winston from 'winston';

const logger: winston.Logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple(),
    ),
    // Turn off console logging during tests.
    silent: process.env.NODE_ENV === 'test',
});

export default logger;
