const Discord = require('discord.js');
const Commando = require('discord.js-commando');

class JoinChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'fun',
            memberName: 'join',
            description: 'Joins the voice channel of the commander.'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("Successfully Joined " + message.guild.voiceChannel + " and bound to " + message.guild.textChannel);
                    })
            }
        }
        else
        {
            message.reply("You must be in a voice channel to summon me!");
        }
    }
}

module.exports = JoinChannelCommand;