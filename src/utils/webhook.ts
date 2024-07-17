export class Webhook {
  private static readonly headers = {
    'Content-Type': 'application/json',
  };

  private readonly _error: string;
  private readonly _info: string;
  private readonly _log: string;

  constructor(config: typeof import('../configs/i14a.js').i14a) {
    this._error = config.env.webhooks.error;
    this._info = config.env.webhooks.info;
    this._log = config.env.webhooks.log;
  }

  async info(content: string) {
    const body = {
      content,
    };

    return await fetch(this._info, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: Webhook.headers,
    });
  }

  async error(content: string) {
    const body = {
      content,
    };

    return await fetch(this._error, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: Webhook.headers,
    });
  }

  async log(content: string) {
    const body = {
      content,
    };

    return await fetch(this._log, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: Webhook.headers,
    });
  }
}
