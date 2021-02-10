module.exports = {
    name: 'nadbad',
    description: 'this is the nadbad command!',
    execute(message, args, num){

        message.delete()
        num ++;
        message.channel.send(`Nad has done ${num} bad!!!!!!`);
        
    }
}