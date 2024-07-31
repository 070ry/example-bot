/* types */
import { Message } from 'discord.js';

/* modules */
import { i14a } from '../../configs/i14a.js';

/* main */
export function create(message: Message) {
  const { author, content } = message;
  if (
    author.bot &&
    !content.startsWith(i14a.prefix) &&
    message.content.length >= 500 &&
    i14a.users.ignored.includes(author.username || author.id)
  )
    return message.react('😭');

  /* const args = content.slice(i14a.prefix.length).trim().split(/ +/);
  const command = args[0].toLowerCase(); */

  i14a.logger.info('test');
}
