module.exports = {
    name: 'compliment',
    description: 'this is the compliment command!',
    execute(message, args){

        let user = args.join();
        let num;
        num = Math.floor(Math.random() * Math.floor(6))

        message.delete()
        switch(user) {
        case'arvin':
            switch(num) {
            case 0:
                message.channel.send(`You're really fun to be around!`);
            break;
            case 1:
                message.channel.send(`Your positivity is really inefectious!`);
            break;
            case 2:
                message.channel.send(`You always know how to find the silver lining!`);
            break;
            case 3:
                message.channel.send(`You have a great sense of humour!`);
            break;
            case 4:
                message.channel.send(`How do you keep being so funny and making everyone laugh?`);
            break;
            case 5:
                message.channel.send(`You're more helpful than you realize!`);
            break;
            }
        break;
        case 'lily':
            switch(num) {
                case 0:
                    message.channel.send(`You're incredibly kind!`);
                break;
                case 1:
                    message.channel.send(`Your work is inspiring!`);
                break;
                case 2:
                    message.channel.send(`Your presence brightens a conversation!`);
                break;
                case 3:
                    message.channel.send(`You've got a really endearing personality!`);
                break;
                case 4:
                    message.channel.send(`You're a great person to talk to about anything!`);
                break;
                case 5:
                    message.channel.send(`You've got a really cute demeanor!`);
                break;
                }
        break;
        case 'bianca':
            switch(num) {
                case 0:
                    message.channel.send(`Your honesty is very much appreciated!`);
                break;
                case 1:
                    message.channel.send(`Your hard work is inspiring!`);
                break;
                case 2:
                    message.channel.send(`You should be proud of yourself!`);
                break;
                case 3:
                    message.channel.send(`You're a great example to others!`);
                break;
                case 4:
                    message.channel.send(`You're a fantastic listener!`);
                break;
                case 5:
                    message.channel.send(`Your passion is energizing!`);
                break;
                }
        break;
        case 'steve':
            switch(num) {
                case 0:
                    message.channel.send(`You're a really efficient worker!`);
                break;
                case 1:
                    message.channel.send(`You're a really witty person!`);
                break;
                case 2:
                    message.channel.send(`You're really self-assured!`);
                break;
                case 3:
                    message.channel.send(`You're a very knowledgeable person!`);
                break;
                case 4:
                    message.channel.send(`You're very emotionally self-aware!`);
                break;
                case 5:
                    message.channel.send(`You're incredibly versatile!`);
                break;
                }
        break;

        }
        
        
    }
}