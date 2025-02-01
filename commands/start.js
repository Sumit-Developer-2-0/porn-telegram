module.exports = (bot, msg) => {
  const chatId = msg.chat.id;

  var buttons = [
    [{ text: "👨‍💻 Developer", url: "tg://openmessage?user_id=6449612223" }],
    [{ text: "🔊 Updates", url: "https://t.me/addlist/P9nJIi98NfY3OGNk" }],
    [{ text: "✅", callback_data: "/join" }]
  ];

  var messageText = "⭐️ To Usᴇ Tʜɪs Bᴏᴛ Yᴏᴜ Nᴇᴇᴅ Tᴏ Jᴏɪɴ Aʟʟ Cʜᴀɴɴᴇʟs -";

  var photoUrl = "https://t.me/kajal_developer/9";

  bot.sendPhoto(chatId, photoUrl, {
    caption: messageText,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: buttons
    }
  }).then(sentMessage => {
      // This is optional and may cause error in your case.
       // bot.on('message', (msg) => {
       //    if (msg.chat.id == chatId){
       //    bot.deleteMessage(chatId, sentMessage.message_id)
       //    }
       // });
   }).catch(error => {
       console.log(error)
   });
};