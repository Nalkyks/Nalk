const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class CreateInviteCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'createinvite',
            group: 'moderation',
            memberName: 'createinvite',
            description: "Creates an instant invite with the default settings."
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('CREATE_INSTANT_INVITE'))
        {
            message.channel.send("You do not have permission to create an instant invite.")
        }
        message.channel.createInvite()
            .then(invite => message.channel.send(`Successfully created an instant invite link with the code of: ${invite.code}`))
            .then(invite => console.log(`Successfully created an instant invite link with the code of: ${invite.code}`))
            .catch(console.error);
        message.delete();
        console.log("The 'createinvite' command has been completed successfully.");
    }
}

module.exports = CreateInviteCommand;
