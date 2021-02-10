module.exports = {
    name: 'cute',
    description: 'this is the cute command!',
    execute(message, args){

       
        message.delete()
        message.channel.send("<a:cute:806313567833686026>")
      
    }
}