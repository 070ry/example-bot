import { types } from '../../types/slashCommand.js';

export const Command: typeof types = {
  data: {
    name: 'ping',
    description: '現在のPing値を表示します。',
    descriptionLocalizations: {
      de: 'Zeigt den aktuellen Ping-Wert an.',
      fr: 'Montre le ping actuel.',
      'en-US': 'Shows the current ping.',
      'zh-CN': '显示当前Ping值。',
      'zh-TW': '顯示當前Ping值。',
    },
  },
  run: async (interaction): Promise<void> => {
    const start = Date.now();
    await interaction.reply({
      embeds: [
        {
          author: {
            name: 'Ping',
            icon_url: 'https://discord.com/assets/448f3e14d5bfcf0e3aa2.svg',
          },
          description: `**${interaction.client.ws.ping}ms**`,
        },
      ],
    });
    const end = Date.now();
    await interaction.editReply({
      embeds: [
        {
          author: {
            name: 'Ping',
            icon_url: 'https://discord.com/assets/448f3e14d5bfcf0e3aa2.svg',
          },
          description: [
            `**Client websocket ping: ${interaction.client.ws.ping}ms**`,
            `**Interaction delay: ${end - start}ms**`,
          ].join('\n'),
        },
      ],
    });
  },
};
