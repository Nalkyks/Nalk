const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const Nalk = new Commando.Client({
    commandPrefix: ';',
    owner: process.env.OWNER,
    disableEveryone: false,
    unknownCommandResponse: false
});
const TOKEN = process.env.TOKEN;

Nalk.registry.registerGroup('entertainment', 'Entertainment');
Nalk.registry.registerGroup('moderation', 'Moderation');
Nalk.registry.registerDefaults();
Nalk.registry.registerCommandsIn(__dirname + "/commands");

Nalk.on('message', message => {
    if(message.content == '522575184243458059')
    {
        message.channel.send("Testing complete.")
    }
});

Nalk.on('ready', () => {
    //Nalk.user.setStatus('dnd')
    //Nalk.user.setPresence({ game: { name: 'with Nalkyks', type: 0 } });
    console.log("All systems online. Bot is ready.");
});

Nalk.login(TOKEN);
