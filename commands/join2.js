 module.exports = (bot, userId) => {
 let stat = null; // Set bot property here if needed.

  if (stat == "ban") {
    bot.sendMessage(userId, "You're Ban From Using The Bot ❌");
  } else {

    let channel = "@kajal_developer";
     bot.getChatMember(channel, userId)
        .then(res => {
           require("./check2")(bot, res, userId)
        })
        .catch(error => {
           console.log(error);
        });
  }
};