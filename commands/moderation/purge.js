const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class DiceRollCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'purge',
            group: 'moderation',
            memberName: 'purge',
            description: 'Deletes a set of messages based on the number after the command.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        {
            let invalidPermission = new Discord.RichEmbed()
                .setTitle('Invalid Permissions')
                .setDescription("You do not have permission to use the `purge` command. Contact the server/guild owner or an administrator/moderator for help.")
                .setThumbnail('https://bit.ly/2DRDdkA')
                .setColor(0xFF0000)
                .setFooter('Requested by: ' + message.author.username)
            message.channel.sendEmbed(invalidPermission);
            message.delete();
            return;
        }
        message.delete()
            .then()
            {
                if (isNaN(args[0])) 
                {
                    return;
                }
    
                const fetched = await message.channel.fetchMessages({limit: args[0]});
                console.log("Deleted " + fetched.size + ' message(s).');
    
                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Error: ${error}`));
    
            }
        console.log("The 'purge' command has been completed successfully.")
    }
}

module.exports = DiceRollCommand;
