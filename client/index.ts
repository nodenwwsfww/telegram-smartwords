import { Context, Telegraf } from 'telegraf';
// Define your own context type
interface MyContext extends Context {
  myProp?: string
  myOtherProp?: number
}

const TELEGRAM_SECRET_KEY = process.env.telegramSecretKey;
console.log(TELEGRAM_SECRET_KEY)
// Create your bot and tell it about your context type
const bot = new Telegraf<MyContext>(TELEGRAM_SECRET_KEY || '2232323')

// Register middleware and launch your bot as usual
bot.use((ctx, next) => {
  return next()
})