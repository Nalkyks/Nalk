const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class CoinFlipCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'fun',
            memberName: 'flip',
            description: 'Flips a coin landing on either heads or tails.'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            var headsEmbed = new Discord.RichEmbed()
                .setTitle('Your Coin Has Landed on Heads!')
                .setDescription("The coin you had recently fliped landed on _heads_. If you want to flip the coin again, type the `flip` command again.")
                .setColor(0xFF782B)
                .setFooter('Requested by: ' + message.author)
            message.channel.sendEmbed(headsEmbed);
        }
        else
        {
            var tailsEmbed = new Discord.RichEmbed()
                .setTitle('Your Coin Has Landed on Tails!')
                .setDescription("The coin you had recently fliped landed on _tails_. If you want to flip the coin again, type the `flip` command again.")
                .setColor(0xFF782B)
                .setFooter('Requested by: ' + message.author)
            message.channel.sendEmbed(tailsEmbed);
        }
    }
}

module.exports = CoinFlipCommand;
