import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = '7883628292:AAECvbKulyA15d6KSbAqkrf-DzL_o0ntfUw';
const webAppUrl = 'https://tg-web-app-5c16e.web.app/';
const bot = new Telegraf(token);

bot.command('start',(ctx)=>{
    ctx.reply(
        'добро пожаловать, просто запустите прилогу...', 
        Markup.keyboard([Markup.button.webApp('отправить сообщение', webAppUrl + '/feedback'),            
        ])
    );
})

bot.on(message('web_app_data'), async ctx =>{
    const data = ctx.webAppData.data.json();
    ctx.reply(`ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch();