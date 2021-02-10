module.exports = {
    name: 's',
    description: 'this is the s command!',
    execute(message, args){

       
        message.delete()
        message.channel.send("https://www.youtube.com/watch?v=gIegx_W1ds0")
      
    }
}