const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`);

const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on('ready', () => {
    //708534970934624331

    console.log("globalbot is online and running fine");
    console.log(TOKEN.emv)
    client.user.setActivity(`pop is global`, {type: 'WATCHING'});

});

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args= message.content.slice(prefix.length).split(/ +/);
    // const argument = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    // message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];


    //commands

    //test command
    if (command === 'test'){
        message.channel.send('@Bray is silver')
    }

})



client.login('MTA1MTgwODI3NTEzNTQ2MzQ1NQ.GYUdEW.WlJzGIgjxzHT2oAvKv_SbL3EU9Zmtl9lAnVwu4');