const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let verifiedrole = message.guild.roles.find('name', 'Verified');
    let unverifiedrole = message.guild.roles.find('name', 'Unverified');

    let alreadyembed = new Discord.RichEmbed()
    .setTitle("Aether Bot")
    .setDescription(`You're already verified, ${message.author}.`)
    .setColor(0xff2b2b)
    .setFooter(message.id)
    .setTimestamp();

    if(!message.member.roles.has(unverifiedrole.id)) return message.author.send(alreadyembed).then(message.delete());
    await(message.member.addRole(verifiedrole.id));
    await(message.member.removeRole(unverifiedrole.id));
    await message.delete();
}

module.exports.help = {
    name: "verify"
}
