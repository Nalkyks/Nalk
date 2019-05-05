const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: ';',
    owner: '263056218090766337',
    disableEveryone: false,
    unknownCommandResponse: false
});
const TOKEN = 'NTIyNTc1MTg0MjQzNDU4MDU5.XJ6MQw.sOyXKEpls2qqK-Pql7nXqn14XdY';

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('management', 'Management');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', message => {
    if(message.content == 'Hello')
    {
        message.channel.send("Hello there, " + message.author)
    }
});

bot.on('ready', () => {
    bot.user.setStatus('online')
    //bot.user.setPresence({ game: { name: 'Protecting Guilds | ;help', type: 1 } })
    console.log("Bot started and is ready to go!");
});

bot.login(TOKEN);