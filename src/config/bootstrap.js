import { initLogger } from './logging';
import { loadEvents } from '../events';
import log            from 'winston';
import db             from '../database/models';
import Discord        from 'discord.js';

export async function initApplication() {
    try {
        // Load a local .env file if in development or test
        if (process.env.NODE_ENV !== 'production') {
            require("dotenv").load({path: "./src/config/.env"});
        }

        // Initialize the logger to use throughout the application
        await initLogger();

        // Initialize the database and synchronize the ORM
        await db.sequelize.sync();
    
        // Create a Discord client
        var client = await new Discord.Client();

        // Register events with the client
        client = await loadEvents(client);

        // Get the bot's access token
        const BOT_TOKEN = await process.env.BOT_TOKEN;

        // Tell the bot to log in
        await client.login(BOT_TOKEN)

    } catch (error) {
        // If any error is thrown during initialization, log the error to the console and exit 
        console.error(`NOT LOGGED IN: '${error}'`);
        process.exit();
    }
}
