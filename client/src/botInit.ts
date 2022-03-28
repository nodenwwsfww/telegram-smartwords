import dotenv from 'dotenv';
import { Context, Telegraf } from 'telegraf';

dotenv.config();

// Define your own context type
export interface MyContext extends Context {
  myProp?: string
  myOtherProp?: number
}
const TELEGRAM_SECRET_KEY = process.env.TELEGRAM_SECRET_KEY;

// Create your bot and tell it about your context type
export const bot = new Telegraf<MyContext>(TELEGRAM_SECRET_KEY || '2232323')
