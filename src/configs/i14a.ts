/* modules */
import 'dotenv/config';

const dev = parseList(`${process.env.developer}`),
  admin = parseList(`${process.env.developer},${process.env.administrator}`),
  mod = parseList(`${process.env.developer},${process.env.administrator},${process.env.moderator}`),
  trusted = parseList(
    `${process.env.developer},${process.env.administrator},${process.env.moderator},${process.env.trusted}`
  ),
  ignored = parseList(`${process.env.ignore}`);

export const i14a = {
  version: '0.0.1-dev',
  prefix: 'ts',
  users: {
    ignored,
    trusted,
    mod,
    admin,
    dev,
  },
  env: {
    dist: 'dist',
    token: process.env.TOKEN,
  },
  logger: {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
  },
};

function parseList(list: string): string[] {
  let result = list.replace(' ', '').replace("'", '').split(',');
  return result;
}
