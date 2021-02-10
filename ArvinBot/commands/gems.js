module.exports = {
    name: 'gems',
    description: 'this is the gems command!',
    execute(message, args){

        let user = message.author.username;
        message.delete()
        let numberOfGems = 10;
        let gems = [];
        let num = undefined;
        let gemsValue = 0;

        for(let i = 0; i < numberOfGems; i++) {
            num = Math.floor(Math.random() * Math.floor(5))
            switch(num) {
                case 0:
                    let redgem = `<a:1gem:808811854268203088>`;
                    gemsValue += 1;
                    gems.push(redgem);
                    break;
                case 1:
                    let greengem = `<a:2gems:808811866482016296>`;
                    gemsValue += 2;
                    gems.push(greengem);
                    break;
                case 2:
                    let purplegem = '<a:5gems:808811878380732437>';
                    gemsValue += 5;
                    gems.push(purplegem);
                    break;
                case 3:
                    let yellowgem = '<a:10gems:808811888460824616>';
                    gemsValue += 10;
                    gems.push(yellowgem);
                    break;
                case 4:
                    let pinkgem = '<a:25gems:808811904129957898>';
                    gemsValue += 25;
                    gems.push(pinkgem);
                    break;
            }
        }
        
        let gemsString = gems.join(' ');
        message.channel.send(gemsString);
        message.channel.send(`Hey ${user}, you scored **${gemsValue}** gems!`)
        if (gemsValue >= 160) {
            message.channel.send(`CONGRATULATIONS @${user}`);
        }
    }
}
