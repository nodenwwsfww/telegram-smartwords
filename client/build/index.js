"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const TELEGRAM_SECRET_KEY = process.env.TELEGRAM_SECRET_KEY;
console.log(TELEGRAM_SECRET_KEY);
// Create your bot and tell it about your context type
const bot = new telegraf_1.Telegraf(TELEGRAM_SECRET_KEY || '2232323');
// Register middleware and launch your bot as usual
bot.use((ctx, next) => {
    return next();
});
