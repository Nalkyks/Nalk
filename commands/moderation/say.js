const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class SayCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'say',
            group: 'moderation',
            memberName: 'say',
            aliases: ['announce'],
            description: 'Says whatever the commander says after the command.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        {
            let invalidPermission = new Discord.RichEmbed()
                .setTitle('Invalid Permissions')
                .setDescription("You do not have permission to use the `say` command. Contact the server/guild owner or an administrator/moderator for help.")
                .setThumbnail('https://bit.ly/2DRDdkA')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidPermission)
            message.delete()
            return;
        }
        if(args == '')
        {
            let invalidUsage = new Discord.RichEmbed()
                .setTitle('Invalid Usage')
                .setDescription("You didn't put a valid usage for the `say` command. Provide a valid usage to use the `say` command.")
                .setThumbnail('https://bit.ly/2DRDdkA')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidPermission)
            message.delete()
            return;
        }
        message.delete();
        message.channel.send(args);
        console.log("The 'say' command has been completed successfully."); 
    }
}

module.exports = SayCommand;
