module.exports = (bot, chatId) => {
    bot.sendMessage(chatId, "🤗 Welcome to Lx Bot 🌺", {
     reply_markup: {
       keyboard: [
          ["🌺 CP", "🇮🇳 Desi"],
          ["🇬🇧 Forener", "🐕‍🦺 Animal"],
          ["💕 Webseries"],
          ["💑 Gay Cp"],
          ["💸 𝘽𝙐𝙔 𝙑𝙄𝙋 💸"]
       ],
       resize_keyboard: true
     }
    });
 };