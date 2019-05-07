const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class DiceRollCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'entertainment',
            memberName: 'roll',
            aliases: ['reroll'],
            description: 'Rolls a six sided dice.'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        let diceResults = new Discord.RichEmbed()
            .setTitle('Dice Roll Results')
            .setDescription("The dice you have rolled landed on the number " + diceRoll + ". If you would like to roll the dice again, type `reroll`.")
            .setColor(0xFF782B)
            .setFooter('Requested by: ' + message.author.username)
        message.channel.sendEmbed(diceResults);
        console.log("The 'roll' command has successfully been successfully completed.");
    }
}

module.exports = DiceRollCommand;
