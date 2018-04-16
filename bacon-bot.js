// Create a Discord client
const Discord = require("discord.js");
const winston = require("winston");

const log;
 
if (process.env.NODE_ENV === 'production') {
    log = winston.createLogger({
        transports: [
            new winston.transports.Console({ format: winston.format.simple() })
        ]
    })
} else if (process.env.NODE_ENV === "development") {
    log = winston.createLogger({
        transports: [
            new winston.transports.File({ filename: 'bacon-bot.log' })
        ]
    })
}

const client = new Discord.Client();

const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN);
log.info("I'm logged in");
