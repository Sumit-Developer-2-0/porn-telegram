module.exports = (bot, options, userId) => {
var user = options.status;
// User.setProperty("status", user, "string"); // You will need to handle user property

    if (user == "member" || user == "administrator" || user == "creator") {
      require("./join2")(bot, userId);
      //User.addToGroup("user") You will need to handle user group
    }
    if (user == "left") {
    bot.sendMessage(userId, "❌ Must join all channel\n @kajal_developer")
    }
};