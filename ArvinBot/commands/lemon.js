module.exports = {
    name: 'lemon',
    description: 'this is the lemon command!',
    execute(message, args){

        message.delete()
        message.channel.send(':lemon:');
        
    }
}