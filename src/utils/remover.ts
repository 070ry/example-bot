/* modules */
import { Client } from 'discord.js';
import { Crash } from './error.js';
import { i14a } from '../configs/i14a.js';

/* main */
export async function removeAll(client: Client) {
  if (!client.user) throw new Crash('User not found');
  i14a.logger.info(`Deleting all commands for ${client.user.tag}...`);
  for (const guild of client.guilds.cache.values()) {
    const commands = await guild.commands.fetch();
    if (commands) {
      for (const command of commands.values()) {
        await command.delete();
      }
    }
  }
}
