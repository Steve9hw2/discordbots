module.exports = {
    name: 'arvinify',
    description: 'transform a message into arvin style!',
    execute(message, args, Discord){

        message.channel.send(`*${message} ~*`);
        
    }
}