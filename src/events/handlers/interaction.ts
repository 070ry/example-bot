/* types */
import { Client, Interaction } from 'discord.js';

/* modules */
import { i14a } from '../../configs/i14a.js';
import { Utilities } from '../../utils/utilities.js';

/* init */
const { getCommands } = new Utilities();

/* events */
export async function interaction(interaction: Interaction) {
  console.log(
    [
      '⊡ Interaction created!',
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
  }
}
