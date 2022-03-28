import {Telegraf, Markup} from 'telegraf';

import { bot, MyContext } from './botInit';

bot.use(Telegraf.log());

bot.start(ctx => {
    ctx.reply('Хочешь пополнить свой словарь и учить слова по умному?', Markup
    .keyboard([
      ['👉 Перейти к пополнению словаря', '📞 Обратная связь'],
    ])
    .oneTime()
    .resize()
  )
});

bot.hears('👉 Перейти к пополнению словаря', 
    ctx => ctx.reply('Введите слово (на языке который учите)'));

bot.hears('📞 Обратная связь', 
    ctx => ctx.reply(
        `Контакты для связи:\n\nTelegram аккаунты для вопросов и предложений: @BBD74 и @romradchenko 
        `));



bot.launch();   
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))



