module.exports = {
    name: 'arvinify',
    description: 'transform a message into arvin style!',
    execute(message, args, Discord){

        message.delete()
        let str = args.join(' ');
        let slicedString = str.substr(0);
        message.channel.send(`*${slicedString} ~*`);
        
    }
}