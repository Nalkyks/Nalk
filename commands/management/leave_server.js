const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class LeaveServerCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leaveserver',
            group: 'management',
            memberName: 'leaveserver',
            description: "Leaves the server the command was sent in so you don't have to kick or ban NalkProtect."
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('MANAGE_GUILD'))
        {
            message.reply("You don't have permission to use this command.");
            return;
        }
        message.delete()
            .then()
        {
            message.guild.leave()
                .then(g => console.log(`Successfully left the guild '${g}'.`))
                .catch(console.error)
            console.log("The command completed successfully.");
        }
    }
}

module.exports = LeaveServerCommand;