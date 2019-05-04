const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("Aether Bot")
    .setDescription(`Pong! \`${Math.round(bot.ping)}\` ms.`)
    .setColor(0xff2b2b)
    .setFooter(message.id)
    .setTimestamp();
    message.channel.send(botembed);
}

module.exports.help = {
    name: "ping"
}
