import { i14a } from '../../configs/i14a.js';

export const Command: typeof import('../../types/index.js').command = {
  data: {
    name: 'restart',
    description: 'Botを再起動します。',
    /*    descriptionLocalizations: {
      de: '',
      fr: '',
      'en-US': '',
      'zh-CN': '',
      'zh-TW': '',
    },*/
  },
  run: async ({ client, user: { id, username }, reply }) => {
    if (!i14a.users.trusted.includes(username || id))
      reply({
        embeds: [
          {
            author: {
              name: `${client.user.username} ・ v${i14a.version}`,
              icon_url: `${await client.user.displayAvatarURL()}`,
            },
            title: 'Error',
            description: "Sorry, But you don't have required permission.",
            fields: [
              {
                name: 'Required Permission(bot)',
                value: 'Trusted User, Bot Moderator, Administrator, Developer',
                inline: false,
              },
            ],
          },
        ],
        ephemeral: true,
      });
  },
};
