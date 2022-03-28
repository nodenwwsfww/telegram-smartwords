import Telegraf from 'telegraf';

import { bot, MyContext } from './botInit';


// Register middleware and launch your bot as usual
bot.launch();

bot.start((ctx) => ctx.reply('Test'));



