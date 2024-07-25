/* types */
import { Client } from 'discord.js';

/* modules */
import { i14a } from '../../configs/i14a.js';
import { Utilities } from '../../utils/utilities.js';

/* init */
const { getCommands } = new Utilities();
const {
  version,
  logger: { info },
} = i14a;

/* main */
export async function ready(client: Client) {
  const { files } = await getCommands();
  client.user?.setPresence({
    activities: [{ name: 'with Discord.js' }],
    status: 'online',
  });

  const message = [
    '⊡ Client is now ready!',
    ` ⊳ Logged in as ${client.user?.tag}!`,
    ` ⊳ ID: ${client.user?.id}`,
    ` ⊳ Loaded ${files.length} command(s)`,
    ` ⊳ ${client.guilds.cache.size} server(s)`,
    ` ⊳ Version: ${version}\n`,
  ].join('\n');

  info(message);
}
