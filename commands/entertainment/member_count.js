const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class MemberCountCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'membercount',
            group: 'entertainment',
            memberName: 'membercount',
            description: 'Shows the commander how many members are in the guild the command was sent in.'
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
        console.log("The 'membercount' command has been completed successfully.")
    }
}

module.exports = MemberCountCommand;
