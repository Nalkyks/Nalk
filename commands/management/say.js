const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class SayCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'say',
            group: 'management',
            memberName: 'say',
            aliases: ['announce'],
            description: 'Says whatever the commander says after the command.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        {
            message.reply("You don't have permission to use this command.");
            return;
        }
        if(args == ' ')
        {
            message.reply("You have to say something after the command.")
        }
        message.channel.send(args);
        message.delete();
        console.log("The command completed successfully."); 
    }
}

module.exports = SayCommand;