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

/* main */
(async () => {
  const { client } = await new Client().init();
  if (!client.user) throw new Crash('User not found');

  client.on('ready', ready);
  client.on('messageCreate', create);
  client.on('interactionCreate', interaction);

  await uploadSlashCommand(client);
})();
