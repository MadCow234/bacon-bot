import log from 'winston';

export async function run(client) {
    log.info(`${client.user.username} has successfully logged in.`);
}
