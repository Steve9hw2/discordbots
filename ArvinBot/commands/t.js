module.exports = {
    name: 't',
    description: 'talk with the bot!',
    execute(message, args, Discord){

        message.delete()
        let str = args.join(' ');
        let slicedString = str.substr(0);
        message.channel.send(`${slicedString}`);
        
    }
}