const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class DiceRollCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'fun',
            memberName: 'roll',
            aliases: ['reroll'],
            description: 'Rolls a six sided dice.'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice has landed on " + diceRoll);
    }
}

module.exports = DiceRollCommand;