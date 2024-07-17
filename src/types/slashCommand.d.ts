import {
  ApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  MessageApplicationCommandData,
} from 'discord.js';

const data: {
  name: string;
  description: string;
  descriptionLocalizations?: Record<string, string>;
  options?: CommandInteractionOptionResolver;
  defaultMemberPermissions?: bigint | string;
  dmPermission?: boolean;
  nsfw?: boolean;
  type?: number;
} = {};

export const types: {
  data: typeof data;
  run: (interaction: CommandInteraction) => Promise<void>;
};
