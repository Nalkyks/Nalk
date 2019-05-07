const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class LeaveServerCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leaveserver',
            group: 'moderation',
            memberName: 'leaveserver',
            description: "Leaves the server the command was sent in so you don't have to kick or ban NalkProtect."
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('MANAGE_GUILD'))
        {
            let invalidPermission = new Discord.RichEmbed()
                .setTitle('Invalid Permissions')
                .setDescription("You do not have permission to use the `leaveserver` command. Contact the server/guild owner or an administrator/moderator for help.")
                .setThumbnail('https://bit.ly/2DRDdkA')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidPermission)
            message.delete()
            return;
        }
        message.delete()
            .then()
        {
            message.guild.leave()
                .then(g => console.log(`Successfully left the guild '${g}'.`))
                .catch(console.error)
            console.log("The 'leaveserver' command has been completed successfully.");
        }
    }
}

module.exports = LeaveServerCommand;
