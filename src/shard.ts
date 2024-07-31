import { Shard, ShardingManager } from 'discord.js';
import 'dotenv/config';

new ShardingManager('./dist/main.js', { token: process.env.TOKEN })
  .on('shardCreate', async (shard: Shard) => {
    console.log(`⊱ Launched shard ${shard.id} (PID: ${shard.process?.pid ?? 'N/A'})\n`);
  })
  .spawn();
