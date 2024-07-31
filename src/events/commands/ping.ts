export const Command: typeof import('../../types/index.js').command = {
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
  run: async interaction => {
    const start = Date.now();
    await interaction.reply({
      embeds: [
        {
          author: {
            name: 'Ping',
            icon_url:
              'https://cdn.discordapp.com/emojis/1263268334804140113.webp?size=64&quality=lossless',
          },
          description: [
            `**Client websocket ping**: ${interaction.client.ws.ping}ms`,
            '**Interaction delay:** Calculating...',
          ].join('\n'),
        },
      ],
    });
    const end = Date.now();
    await interaction.editReply({
      embeds: [
        {
          author: {
            name: 'Ping',
            icon_url:
              'https://cdn.discordapp.com/emojis/1263268334804140113.webp?size=64&quality=lossless',
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
