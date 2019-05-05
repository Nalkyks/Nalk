const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class BanCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'moderation',
            memberName: 'ban',
            description: 'Bans the first mentioned user.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('BAN_MEMBERS'))
        {
            let commandDenied = new Discord.RichEmbed()
                .setTitle('Command Denied')
                .setDescription("You do not have the permissions to ban other users. Please contact an administrator or the server owner for help.")
                .setThumbnail('https://cdn4.iconfinder.com/data/icons/basic-elements-circle/614/754_-_Cancel-256.png')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(commandDenied)
            message.delete()
            return;
        }
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            let invalidUser = new Discord.RichEmbed()
                .setTitle('Member Not Found')
                .setDescription("The requested user to be banned is invalid. User may have left the server before you could've banned them, or you made a typo.")
                .setThumbnail('https://cdn4.iconfinder.com/data/icons/basic-elements-circle/614/754_-_Cancel-256.png')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidUser)
            message.delete();
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        if(!reason)
        {
            let invalidReason = new Discord.RichEmbed()
                .setTitle('No Reason Was Specified')
                .setDescription("No reason was specified on why this user is getting banned. Please provide a reason on why this user is getting banned.")
                .setThumbnail('https://cdn4.iconfinder.com/data/icons/basic-elements-circle/614/754_-_Cancel-256.png')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidReason)
            message.delete()
            return;
        }
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
        message.delete();
        let banEmbed = new Discord.RichEmbed() //Creates embed of ban details
            .setDescription("Ban Details")
            .setColor(0xFF0000)
            .addField("Banned User:", bannedUser + " with ID: " + bannedUser.id)
            .addField("Banned By:", message.author + " with ID: " + message.author.id)
            .addField("Banned in the:", message.channel + " channel")
            .addField("Banned On:", message.createdAt)
            .addField("Reason for Ban:", reason)
        message.channel.sendEmbed(banEmbed);
        console.log("The ban command has completed successfully."); 
    }
}

module.exports = BanCommand;
