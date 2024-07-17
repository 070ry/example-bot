/* modules */
import { Client } from './utils/init.js';
import { Utilities } from './utils/utilities.js';
import { Crash } from './utils/error.js';

/* events */
import { ready } from './events/handlers/client.js';
import { create } from './events/handlers/message.js';
import { interaction } from './events/handlers/interaction.js';

/* initialize */
const { uploadSlashCommand } = new Utilities();

(async () => {
  const { client } = await new Client().init();
  if (!client.user) return new Crash('User not found');

  await client.on('ready', ready);
  client.on('messageCreate', create);
  client.on('interactionCreate', interaction);

  await uploadSlashCommand(client);
})();
