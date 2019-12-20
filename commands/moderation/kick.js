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
            description: 'Kicks the first mentioned user after the command.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('KICK_MEMBERS'))
        {
            let invalidPermission = new Discord.RichEmbed()
                .setTitle('Error: Invalid Permissions')
                .setDescription("You do not have permission to use the `kick` command. Think this is a mistake? Contact the server/guild owner or an administrator/moderator for assistance.")
                .setThumbnail('https://bit.ly/2DRDdkA')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidPermission)
            message.delete()
            return;
        }
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            let invalidUser = new Discord.RichEmbed()
                .setTitle('Error: Member Not Found')
                .setDescription("The requested user to be kicked is invalid. User may have left the server before you could've kicked them, or you made a typo.")
                .setThumbnail('https://bit.ly/2DRDdkA')
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
                .setTitle('Error: Invalid Reason')
                .setDescription("No reason was specified on why " + kickedUser + " is getting kicked, please provide a reason on why " + kickedUser + " is getting kicked and try again.")
                .setThumbnail('https://bit.ly/2DRDdkA')
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
        let kickEmbed = new Discord.RichEmbed()
            .setTitle("Kick Details")
            .setDescription("These are the kick details for " + kickedUser + ", and gives you more information about the kicked user and the administrator/moderator.")
            .setColor(0xFFFF00)
            .addField("Kicked User:", kickedUser + " with ID: " + kickedUser.id)
            .addField("Kicked By:", message.author + " with ID: " + message.author.id)
            .addField("Kicked On:", message.createdAt)
            .addField("Moderator Note:", reason)
        message.channel.sendEmbed(kickEmbed);
        console.log("The 'kick' command has been completed successfully."); 
    }
}

module.exports = KickCommand;
