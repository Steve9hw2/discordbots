module.exports = {
    name: 'nad',
    description: 'this is the nad command!',
    execute(message, args){

       
        message.delete()
        message.channel.send("<:nad:806301711634268206><:bad:806301724406448168>")
      
    }
}