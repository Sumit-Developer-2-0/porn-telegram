module.exports = (bot, msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "⚠️ WARNING ⚠️\n\nDon't Delete Bot Otherwise You Lost Bot Access Soon 👋", {
    reply_markup: {
      keyboard: [
        ["🇮🇳 video 1", "🇮🇳 video 2"],
        ["🇮🇳 video 3", "🇮🇳 video 4"],
        ["🇮🇳 video 5", "🇮🇳 video 6"],
        ["🇮🇳 video 7", "🇮🇳 video 8"],
        ["🇮🇳 video 9", "🇮🇳 video 10"],
        ["⚜️ Back ⬅️"],
      ],
      resize_keyboard: true,
    },
  });
};