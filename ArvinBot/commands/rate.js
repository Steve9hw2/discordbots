module.exports = {
    name: 'rate',
    description: 'this is the rate command!',
    execute(message, args){

        message.delete()
        let num;
        num = Math.floor(Math.random() * Math.floor(6))
        message.channel.send(`${num}/5`);
        
    }
}