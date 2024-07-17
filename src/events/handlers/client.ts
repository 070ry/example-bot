/* types */
import { Client } from 'discord.js';

/* modules */
import { i14a } from '../../configs/i14a.js';
import { Utilities } from '../../utils/utilities.js';

/* init */
const { getCommands } = new Utilities();

export async function ready(client: Client) {
  const { files } = await getCommands();
  client.user?.setPresence({
    activities: [{ name: 'with Discord.js' }],
    status: 'online',
  });
  console.log(
    [
      '⊡ Client is now ready!',
      ` ⊳ Logged in as ${client.user?.tag}!`,
      ` ⊳ ID: ${client.user?.id}`,
      ` ⊳ Loaded ${files.length} command(s)`,
      ` ⊳ ${client.guilds.cache.size} server(s)`,
      ` ⊳ Version: ${i14a.version}\n`,
    ].join('\n')
  );
}
