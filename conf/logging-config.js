export function getLogger() {
    // Setup logging
    const Winston = require("winston");
    if (process.env.NODE_ENV === 'production') {
        // Log to console in production because Heroku will add STDOUT to the log stream
        var logger = new (Winston.Logger)({
            transports: [
                new Winston.transports.Console()
            ]
        });
        // Configure CLI output
        logger.cli();
    }
    else if (process.env.NODE_ENV === "development") {
        // Log to a file in development        
        var logger = new (Winston.Logger)({
            transports: [
                new Winston.transports.File({ filename: 'bacon-bot.log' })
            ]
        });
    }
    return logger;
}