import { Shard, ShardingManager } from 'discord.js';
import { config } from 'dotenv';

config();

const manager = new ShardingManager('./dist/main.js', { token: process.env.TOKEN });

manager.on('shardCreate', async (shard: Shard) => {
  console.log(`⊱ Launched shard ${shard.id} (PID: ${shard.process?.pid ?? 'N/A'})\n`);
});
manager.spawn();
