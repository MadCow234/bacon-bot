import log from 'winston';

export async function run(client) {
    try {
        // Set the client's initial presence
        client.user.setActivity("bacon sizzle.", {
            type: 2
        });

        log.info(`${client.user.username} has successfully logged in.`);

    } catch (error) {
        log.error(`[/events/ready.js] ${err.message}`);
    }
}
