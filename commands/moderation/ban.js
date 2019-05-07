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
            description: 'Bans the first mentioned user after the command.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('BAN_MEMBERS'))
        {
            let invalidPermission = new Discord.RichEmbed()
                .setTitle('Invalid Permissions')
                .setDescription("You do not have permission to use the `ban` command. Contact the server/guild owner or an administrator/moderator for help.")
                .setThumbnail('https://bit.ly/2DRDdkA')
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
                .setTitle('No Reason Was Specified')
                .setDescription("No reason was specified on why " + bannedUser + " is getting banned. Please provide a reason on why " + bannedUser + " is getting banned.")
                .setThumbnail('https://bit.ly/2DRDdkA')
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
        let banEmbed = new Discord.RichEmbed()
            .setTitle("Ban Details")
            .setDescription("These are the ban details for " + bannedUser + ", and gives you more information about the banned user.")
            .setColor(0xFF0000)
            .addField("Banned User:", bannedUser + " with ID: " + bannedUser.id)
            .addField("Banned By:", message.author + " with ID: " + message.author.id)
            .addField("Banned On:", message.createdAt)
            .addField("Reason for Ban:", reason)
        message.channel.sendEmbed(banEmbed);
        console.log("The 'ban' command has been completed successfully."); 
    }
}

module.exports = BanCommand;
