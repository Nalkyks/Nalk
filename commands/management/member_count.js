const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class MemberCountCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'membercount',
            group: 'management',
            memberName: 'membercount',
            description: 'Shows how many members are in the guild.'
        });
    }

    async run(message, args)
    {
        var currentMembers = new Discord.RichEmbed()
            .setTitle('Current Server Members')
            .setDescription("There are currently " + message.guild.memberCount + " total members in this server.")
            .setColor(0xFF782B)
            .setFooter('Requested by: ' + message.author.username)
        message.channel.sendEmbed(currentMembers);
        console.log("The membercount command completed successfully.")
    }
}

module.exports = MemberCountCommand;