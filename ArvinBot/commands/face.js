module.exports = {
    name: 'face',
    description: 'this is the face command!',
    execute(message, args){

        message.delete()
        message.channel.send(`https://cdn.discordapp.com/attachments/755780152037867610/804803335504920606/face.png`);
        
    }
}