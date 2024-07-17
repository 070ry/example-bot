import { Client } from 'discord.js';

export const GetTools = new (class GetTools {
  constructor() {}
  getChannel(client: Client, id: string) {
    return client.channels.cache.get(id) ?? undefined;
  }
  getGuild(client: Client, id: string) {
    return client.guilds.cache.get(id) ?? undefined;
  }
})();
