import { Logger, transports } from "winston";

export function getLogger() {
    if (process.env.NODE_ENV === 'production') {
        // Log to console in production because Heroku will add STDOUT to the log stream
        var logger = new Logger({
            transports: [
                new transports.Console()
            ]
        });
        // Configure CLI output
        logger.cli();
    }
    else if (process.env.NODE_ENV === "development") {
        // Log to a file in development        
        var logger = new Logger({
            transports: [
                new transports.File({ filename: 'bacon-bot.log' })
            ]
        });
    }
    return logger;
}