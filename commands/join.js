 module.exports = (bot, request) => {
  if(request.data){
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    bot.deleteMessage(chat_id, message_id)
  }
  let id = request.from.id
    bot.getChatMember(chat_id, id)
        .then(res => {
           require("./join1")(bot, res, id);
        })
        .catch(error => {
           console.log(error);
        });
  };