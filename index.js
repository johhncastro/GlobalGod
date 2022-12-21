const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`);

const prefix = '!';

const ffmpeg = require('ffmpeg');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on('ready', () => {
    //708534970934624331

    console.log("globalbot is online and running fine");

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

    
});

client.on('message', message => {
  // Check for the !play command
  if (message.content.startsWith('!play')) {
    // Get the song name from the message
    const songName = message.content.split(' ')[1];

    // Get the voice channel that the user is in
    const voiceChannel = message.member.voice.channel;

    // Check if the user is in a voice channel
    if (voiceChannel) {
      // Join the voice channel
      voiceChannel.join().then(connection => {
        // Create a broadcast
        const broadcast = client.voice.createBroadcast();

        // Play the audio stream over Discord
        broadcast.playStream(`./songs/${songName}.mp3`);
        const dispatcher = connection.play(broadcast);
      }).catch(console.error);
    } else {
      // Send a message to the user if they are not in a voice channel
      message.channel.send('You need to be in a voice channel to use this command.');
    }
  }
});
  
  
  
  


client.login('insert token here');
