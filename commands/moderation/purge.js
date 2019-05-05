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
            description: 'Deletes a number of messages based on user choice.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        {
            message.reply("You don't have permission to use this command.");
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
                console.log(fetched.size + ' messages found, deleting...');
    
                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Error: ${error}`));
    
            }
    }
}

module.exports = DiceRollCommand;