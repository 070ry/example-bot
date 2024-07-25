import {
  ApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  MessageApplicationCommandData,
} from 'discord.js';

export const SlashCommandData: {
  name: string;
  description: string;
  descriptionLocalizations?: Record<string, string>;
  options?: CommandInteractionOptionResolver;
  defaultMemberPermissions?: bigint | string;
  dmPermission?: boolean;
  nsfw?: boolean;
  type?: number;
} = {};

export const command: {
  data: typeof SlashCommandData;
  run: (interaction: CommandInteraction) => Promise<void>;
};
