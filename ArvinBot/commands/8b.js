module.exports = {
    name: '8b',
    description: 'this is the 8b command!',
    execute(message, args){

        message.delete()
        let num;
        num = Math.floor(Math.random() * Math.floor(3))
        switch(num){
            case 0:
                message.channel.send(`no!`);
            break;
            case 1:
                message.channel.send(`yes!`);
            break;
            case 2:
                message.channel.send(`maybe!`);
            break;
            case 3:
                message.channel.send(`uhhhhhhhh`);
            break;
        }
        
    }
}