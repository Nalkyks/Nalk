const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class KickCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'Kicks the first mentioned user.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('KICK_MEMBERS'))
        {
            let commandDenied = new Discord.RichEmbed()
                .setTitle('Command Denied')
                .setDescription("You do not have the permissions to kick other users. Please contact an administrator or the server owner for help.")
                .setThumbnail('https://cdn4.iconfinder.com/data/icons/basic-elements-circle/614/754_-_Cancel-256.png')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(commandDenied)
            message.delete()
            return;
        }
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            let invalidUser = new Discord.RichEmbed()
                .setTitle('Member Not Found')
                .setDescription("The requested user to be kicked is invalid. User may have left the server before you could've kicked them, or you made a typo.")
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
                .setDescription("No reason was specified on why " + kickedUser + " is getting kicked. Please provide a reason on why " + kickedUser + " is getting kicked.")
                .setThumbnail('https://cdn4.iconfinder.com/data/icons/basic-elements-circle/614/754_-_Cancel-256.png')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidReason)
            message.delete()
            return;
        }
        message.guild.member(kickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
        message.delete();
        let kickEmbed = new Discord.RichEmbed() //Creates embed of ban details
            .setDescription("Kick Details")
            .setColor(0xFFFF00)
            .setThumbnail(__dirname + '/images/Kicked_Out.png')
            .addField("Kicked User:", kickedUser + " with ID: " + kickedUser.id)
            .addField("Kicked By:", message.author + " with ID: " + message.author.id)
            .addField("Kicked in the:", message.channel + " channel")
            .addField("Kicked On:", message.createdAt)
            .addField("Reason for Kick:", reason)
        message.channel.sendEmbed(kickEmbed);
        console.log("The kick command has completed successfully."); 
    }
}

module.exports = KickCommand;
