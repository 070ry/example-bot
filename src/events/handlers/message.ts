import { Message } from 'discord.js';
import { i14a } from '../../configs/i14a.js';

export function create(message: Message) {
  const { author, content /*channel, guild*/ } = message;
  if (message.author.bot) return;

  if (!content.startsWith(i14a.prefix)) return;

  const args = content.slice(i14a.prefix.length).trim().split(/ +/);
  // const command = args[0].toLowerCase();

  if (i14a.users.ignored.includes(author.username || author.id)) return message.react('❌');

  i14a.logger.info('test logger');
}
