/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
module.exports = {
    name: 'lmfoahsguai', // The name of the keyword to react to,
    aliases: ['rerttty', 'gheffyth'], // Other keywords to react to
    gifLink: 'send a gif link (e.g tenor, giphy etc)', // The gif we're responding with
    // We could respond with text, or any other type of file instead.
    execute(message) {
        return message.channel.send(this.gifLink);
    },
};