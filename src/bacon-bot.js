import * as Discord from "discord.js";
import * as LoggingConfig from "./config/logging.js";
import * as Datasource from "./config/datasource.js";

// Create a Discord client
var client = new Discord.Client();

// Load a local .env file if in development
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").load({path: "./src/config/.env"});
}

// Setup logger
const log = LoggingConfig.getLogger();

// Initialize the datasource
const sequelize = Datasource.initDatasource();
sequelize
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