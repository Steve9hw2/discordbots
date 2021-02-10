module.exports = {
    name: 'cook',
    description: 'this is the cooking command!',
    execute(message, args){

       
        message.delete()
        let num;
        num = Math.floor(Math.random() * Math.floor(20))
        switch(num){
            case 0:
                message.channel.send(`:croissant:`);
            break;
            case 1:
                message.channel.send(`:bagel:`);
            break;
            case 2:
                message.channel.send(`:pancakes:`);
            break;
            case 3:
                message.channel.send(`:waffle:`);
            break;
            case 4:
                message.channel.send(`:bacon:`);
            break;
            case 5:
                message.channel.send(`:cheese:`);
            break;
            case 6:
                message.channel.send(`:hotdog:`);
            break;
            case 7:
                message.channel.send(`:hamburger:`);
            break;
            case 8:
                message.channel.send(`:pizza:`);
            break;
            case 9:
                message.channel.send(`:stuffed_flatbread:`);
            break;
            case 10:
                message.channel.send(`:taco:`);
            break;
            case 11:
                message.channel.send(`:burrito:`);
            break;
            case 12:
                message.channel.send(`:spaghetti:`);
            break;
            case 13:
                message.channel.send(`:ramen:`);
            break;
            case 14:
                message.channel.send(`:stew:`);
            break;
            case 15:
                message.channel.send(`:curry:`);
            break;
            case 16:
                message.channel.send(`:bento:`);
            break;
            case 17:
                message.channel.send(`:dumpling:`);
            break;
            case 18:
                message.channel.send(`:rice:`);
            break;
            case 19:
                message.channel.send(`:cooking:`);
            break;
    }
}
}