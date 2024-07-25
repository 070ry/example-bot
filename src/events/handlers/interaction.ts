/* types */
import { Interaction } from 'discord.js';

/* modules */
import { i14a } from '../../configs/i14a.js';
import { Utilities } from '../../utils/utilities.js';

/* init */
const { getCommands } = new Utilities();

/* main */
export async function interaction(interaction: Interaction) {
  console.log(
    [
      '⊡ Interaction received',
      ` ⊳ ID: ${interaction.id}`,
      ` ⊳ Type: ${interaction.type}`,
      ` ⊳ User: ${interaction.user.tag}\n`,
    ].join('\n')
  );
  if (interaction.isCommand()) {
    const { commands } = await getCommands();
    const command = commands.get(interaction.commandName);
    if (!command || i14a.users.ignored.includes(interaction.user.username || interaction.user.id))
      return;
    command.run(interaction);
  } else if (interaction.isStringSelectMenu()) {
    return;
    // TODO: Add StringSelectMenu interaction behavior
  } else {
    i14a.logger.error('Recieved unhandled interaction type: ' + interaction.type);
    return;
  }
}
