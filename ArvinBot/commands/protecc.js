module.exports = {
    name: 'protecc',
    description: 'this is the protecc command!',
    execute(message, args){

        message.delete()
        message.channel.send(`https://cdn.discordapp.com/attachments/755780152037867610/805550583917314138/protecc.png`);
        
    }
}