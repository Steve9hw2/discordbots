module.exports = {
    name: 'slamina',
    description: 'this is the slamina command!',
    execute(message, args){

        message.delete()
        message.channel.send(`https://steve9hw2.github.io/cart263/exercises/e2-slamina-plus/`);
        
    }
}