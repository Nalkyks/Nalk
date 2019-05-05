const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class CreateInviteCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'createinvite',
            group: 'management',
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
            .then(invite => console.log(`Created an invite with a code of ${invite.code} in ${message.guild}.`))
            .catch(console.error);
        message.delete();
    }
}

module.exports = CreateInviteCommand;