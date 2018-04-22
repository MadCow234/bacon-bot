import * as log from 'winston';
import * as Discord from "discord.js";
import { setLogger } from "./config/logging.js";
import { initDatasource } from "./config/datasource.js";

// Create a Discord client
var client = new Discord.Client();

// Load a local .env file if in development
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").load({path: "./src/config/.env"});
}

// Setup logger
setLogger();

// Initialize the datasource
const datasource = initDatasource();
datasource
  .authenticate()
  .then(() => {
    log.info('Connection has been established successfully.');
  })
  .catch(err => {
    log.info('Unable to connect to the database:', err);
  });

// Get the bot's access token
const BOT_TOKEN = process.env.BOT_TOKEN;

client.login(BOT_TOKEN).then(token => log.info(`${client.user.username} is logged in.`)).catch(error => console.log(error));