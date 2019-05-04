const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let memberembed = new Discord.RichEmbed()
    .setTitle("Aether Bot")
    .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **report**`)
    .setColor(0xff2b2b)
    .setFooter(message.id)
    .setTimestamp();

    let modembed = new Discord.RichEmbed()
    .setTitle("Aether Bot")
    .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **report**, **clear**, **kick**, **mute**, **unmute**`)
    .setColor(0xff2b2b)
    .setFooter(message.id)
    .setTimestamp();

    let adminembed = new Discord.RichEmbed()
    .setTitle("Aether Bot")
    .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **report**, **clear**, **kick**, **mute**, **unmute**, **ban**, **unban**, **giveaway**`)
    .setColor(0xff2b2b)
    .setFooter(message.id)
    .setTimestamp();

    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(memberembed)
    if(message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send(adminembed)
    if(message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(modembed)
}

module.exports.help = {
    name: "help"
}
