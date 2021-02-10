module.exports = {
    name: 'bake',
    description: 'this is the baking command!',
    execute(message, args){

       
        message.delete()
        let num;
        num = Math.floor(Math.random() * Math.floor(9))
        switch(num){
            case 0:
                message.channel.send(`:bread:`);
            break;
            case 1:
                message.channel.send(`:french_bread:`);
            break;
            case 2:
                message.channel.send(`:pie:`);
            break;
            case 3:
                message.channel.send(`:cupcake:`);
            break;
            case 4:
                message.channel.send(`:cake:`);
            break;
            case 5:
                message.channel.send(`:custard:`);
            break;
            case 6:
                message.channel.send(`:doughnut:`);
            break;
            case 7:
                message.channel.send(`:cookie:`);
            break;
            case 8:
                message.channel.send(`:moon_cake:`);
            break;
    }
}
}