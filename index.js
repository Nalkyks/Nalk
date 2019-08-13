const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: ';',
    owner: '263056218090766337',
    disableEveryone: false,
    unknownCommandResponse: false
});
const TOKEN = process.env.TOKEN;

bot.registry.registerGroup('entertainment', 'Entertainment');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', message => {
    if(message.content == '522575184243458059')
    {
        message.channel.send("Testing complete.")
    }
});

bot.on('ready', () => {
    bot.user.setStatus('online')
    // bot.user.setPresence({ game: { name: 'Protecting Guilds | ;help', type: 0 } });
    console.log("All systems online. Bot is ready.");
});

bot.login(TOKEN);
