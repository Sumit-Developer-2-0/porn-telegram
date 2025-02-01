const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const fs = require("node:fs");
const path = require("node:path");

const bot = new TelegramBot(config.telegramBotToken, { polling: true });
const commandsPath = path.join(__dirname, "commands");

// Function to load commands from the commands folder
const loadCommands = () => {
    fs.readdirSync(commandsPath).forEach((file) => {
        const filePath = path.join(commandsPath, file);
        const command = path.basename(file, ".js")

        if(file.endsWith(".js"))
           bot.on('message', (msg) => {
              if(msg.text == `/${command}` || msg.text == `${command}`){
                let func = require(filePath);
                func(bot, msg)
              }
            });

            bot.on('callback_query', (callbackQuery) => {
            if (callbackQuery.data == `/${command}`){
                 let func = require(filePath);
                 func(bot, callbackQuery);
              }
        });

    });
};

// Start Loading Commands
loadCommands();

//Back Command Trigger
 bot.on('message', (msg) => {
  if(msg.text == "⚜️ Back ⬅️"){
     let func = require("./commands/VBMENU.js");
      func(bot, msg.chat.id)
    }
  });

console.log("Bot Started");