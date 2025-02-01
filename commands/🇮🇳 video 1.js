module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  const photoLinks = [
      "https://t.me/kajal_developer/9",
      "https://example.com/photo2.jpg", // Replace with the actual URL of Photo 2
      "https://example.com/photo3.jpg", // Replace with the actual URL of Photo 3
      "https://example.com/photo4.jpg", // Replace with the actual URL of Photo 4
      "https://example.com/photo5.jpg", // Replace with the actual URL of Photo 5
      "https://example.com/photo6.jpg", // Replace with the actual URL of Photo 6
      "https://example.com/photo7.jpg", // Replace with the actual URL of Photo 7
      "https://example.com/photo8.jpg", // Replace with the actual URL of Photo 8
      "https://example.com/photo9.jpg", // Replace with the actual URL of Photo 9
      "https://example.com/photo10.jpg", // Replace with the actual URL of Photo 10
      "https://example.com/photo11.jpg", // Replace with the actual URL of Photo 11
  ];

  const sendPhotoPromises = photoLinks.map(photoUrl => {
        return bot.sendPhoto(chatId, photoUrl)
            .then(() => console.log(`Sent photo: ${photoUrl}`))
            .catch(error => {
                console.error(`Error sending photo ${photoUrl}:`, error);
                throw error; // Important: Re-throw the error to fail Promise.all
            });
    });

  Promise.all(sendPhotoPromises)
    .then(() => console.log("All photos sent successfully!"))
    .catch(error => console.error("Error sending some or all photos:", error));
};