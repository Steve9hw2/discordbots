const Discord = require(`discord.js`);

const client = new Discord.Client();

const prefix = `~`;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`ArvinTranslator is online!`);
});

client.on(`message`, message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'uwu') {
        client.commands.get('uwu').execute(message, args);
    } else if (command === 'arvinify') {
        client.commands.get('arvinify').execute(message, args, Discord);
    } else if (command === 'lemon') {
        client.commands.get('lemon').execute(message, args);
    } else if (command === 'noot') {
        client.commands.get('noot').execute(message, args);
        
    } else if (command === 'masochist') {
        client.commands.get('masochist').execute(message, args);
    } else if (command === 'a') {
        client.commands.get('a').execute(message, args);
    }
})

client.login('ODA0MTQxNTEyODI4NjQ5NTEy.YBIBJA.NkPdI1tpHuWkxXr7QMp9RlZGTnM')