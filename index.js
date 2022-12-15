const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`);

const prefix = '>';
const playPrefix = '>play';

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
    // Check if the message starts with the prefix
    if (message.content.startsWith(playPrefix)) {
      // Get the user's voice channel
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel) {
        // If the user is not in a voice channel, send a message
        return message.reply('Please join a voice channel first!');
      }
  
      // Join the user's voice channel
      voiceChannel.join().then(connection => {
        // Play the audio file
        const audio = connection.play('audio.mp3');
  
        // Send a message when the audio file has finished playing
        audio.on('finish', () => {
          message.channel.send('Finished playing the audio file.');
        });
      });
    }
  });
  

  
  
  
  
  


client.login('insert token here');