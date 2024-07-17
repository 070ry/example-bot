import {
  Client as Discord,
  GatewayIntentBits,
  DefaultWebSocketManagerOptions as WebSocketOptions,
} from 'discord.js';
import { i14a } from '../configs/i14a.js';

export class Client {
  private client: Discord | null = null;
  private i14a = i14a;
  public async init() {
    this.client = new Discord({ intents: this.getIntents() });
    /* @ts-ignore */
    WebSocketOptions.identifyProperties.browser = 'Discord Android';
    await this.client.login(this.i14a.env.token);

    this.client.on('error', e => {
      console.log(e.message);
      process.exit(1);
    });

    return { client: this.client };
  }

  private getIntents() {
    return [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
    ];
  }
}
