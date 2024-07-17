/* modules */
import { Webhook } from '../utils/webhook.js';
import { Collection } from 'discord.js';
import 'dotenv/config';

/* constants */
const webhookChannel = '1257256106384687104';
const host = 'https://discord.com';
const api = `${host}/api/`;

/* init */
const commands = new Collection();

export const i14a = {
  version: '0.0.1-dev',
  prefix: 'ts',
  users: {
    ignored: ['070ry', '880410653058289685'],
  },
  channels: {
    log: '1256846592074317834',
    info: '1256846592074317834',
    error: '1256846592074317834',
    generic: '1256846592074317834',
  },
  env: {
    dist: 'dist',
    token: process.env.TOKEN,
    commands,
    webhooks: {
      info: `${api}/webhooks/${webhookChannel}/${process.env.info}`,
      error: `${api}/webhooks/${webhookChannel}/${process.env.error}`,
      log: `${api}/webhooks/${webhookChannel}/${process.env.log}`,
    },
  },
  logger: {
    log: (message: any) => {
      console.log(message);
      webhook.log(message);
    },
    error: (message: string) => {
      console.error(message);
      webhook.error(message + '\n');
    },
    warn: (message: string) => console.warn(message),
    info: (message: string) => {
      console.info(message);
      webhook.info(message);
    },
  },
};

const webhook = new Webhook(i14a);
