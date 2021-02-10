module.exports = {
    name: 'masochist',
    description: 'this is the masochist command!',
    execute(message, args){

        message.delete()
        message.channel.send(`Lily, you need to be nicer to yourself! ~`);
        
    }
}