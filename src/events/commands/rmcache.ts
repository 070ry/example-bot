import { removeAll } from '../../utils/remover.js';

export const Command: typeof import('../../types/index.js').command = {
  data: {
    name: 'rmcache',
    description: 'Botのスラッシュコマンドのキャッシュを削除します。',
    descriptionLocalizations: {
      de: 'Vide den Cache der Bot-Slash-Befehle.',
      fr: 'Enleve le cache des commandes slash du bot.',
      'en-US': 'Removes the bot slash command cache.',
      'zh-CN': '清除Bot Slash命令缓存。',
      'zh-TW': '清除Bot Slash命令快取。',
    },
  },
  run: async interaction => {
    interaction.reply({ content: 'Removing all commands...', ephemeral: true });
    removeAll(interaction.client);
    interaction.editReply({
      content: 'All commands are removed! Make sure /restart to re-upload the slash commands.',
    });
  },
};
