const telegramBot=require('node-telegram-bot-api')
const dotenv=require('dotenv');
const axios=require('axios');
const TelegramBot = require('node-telegram-bot-api');
dotenv.config();
const token=process.env.TOKEN;

const bot=new TelegramBot(token,{polling:true});

bot.on('message',(msg)=>{
    const text=msg.text;
    console.log("message received",text);

    bot.sendMessage(msg.chat.id, "You said"+text);
})
bot.onText(/\/joke/, async (msg)=>{
    const joke =await axios.get('https://official-joke-api.appspot.com/random_joke');

    const setup=joke.data.setup;
    const punchline=joke.data.punchline;
    bot.sendMessage(msg.chat.id,setup+' '+punchline);
})