module.exports = {
    name: 'a',
    description: 'this is the a command!',
    execute(message, args){

        message.delete()
        message.channel.send(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
        
    }
}