module.exports = {
    name: 'joker',
    description: 'this is the joker command!',
    execute(message, args){

        message.delete()
        message.channel.send(`https://www.youtube.com/watch?v=iddjbpUOhcg`);
        
    }
}