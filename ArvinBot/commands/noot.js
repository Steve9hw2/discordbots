module.exports = {
    name: 'noot',
    description: 'this is the noot command!',
    execute(message, args){

       
        message.delete()
        message.channel.send("<a:nootnoot:804175566848000040>")
      
    }
}