module.exports = (bot, msg) => {
  let matchMessage = `
[ 🇮🇳 India Vs England 🇬🇧▶️ ]

🌟 *Live Streaming Links Here* 👇🏻🔥
1. [Link 1](https://t.me/+p-5st3bA9xMzZWE1)
2. [Link 2](https://t.me/+p-5st3bA9xMzZWE1)
3. [Link 3](https://t.me/+p-5st3bA9xMzZWE1)
`;

  // Send the message to the user
    bot.sendMessage(msg.chat.id, matchMessage, {
        parse_mode: "Markdown" // Use Markdown for formatting
    });
};