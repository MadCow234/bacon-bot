import { initLogger } from './logging';
import log            from 'winston';
import db             from '../database/models';
import Discord        from 'discord.js';

export async function init() {
    // Load a local .env file if in development or test
    if (process.env.NODE_ENV !== 'production') {
        require("dotenv").load({path: "./src/config/.env"});
    }
    
    // Create a Discord client
    var client = await new Discord.Client();

    // Setup logger
    await initLogger();

    // Get the bot's access token
    const BOT_TOKEN = process.env.BOT_TOKEN;

    db.sequelize.sync()
        .then(()=> 
            client.login(BOT_TOKEN)
                .then(token => 
                    log.info(`${client.user.username} is logged in.`))
                .catch(error => 
                    console.log(error)));
}
