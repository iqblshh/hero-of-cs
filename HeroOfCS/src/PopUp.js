mapName = function() {
    var text;
    var textX;
    var textY;

    if(isMap.cpu) {
        text = 'CPU';
        textX = 100;
        textY = 50;
    }
    else if(isMap.fan) {
        text = 'Fan Base';
        textX = 166;
        textY = 50;
    }
    else if(isMap.supply) {
        text = 'Power Supply Room';
        textX = 320;
        textY = 50;
    }
    else if(isMap.internet) {
        text = 'Internet Port';
        textX = 210;
        textY = 50;
    }
    else if(isMap.ram) {
        text = 'RAM Slot';
        textX = 166;
        textY = 50;
    }
    else if(isMap.storage) {
        text = 'Storage Room';
        textX = 233;
        textY = 50;
    }

    ctx3.clearRect(0,0,500,200);
    ctx3.drawImage(img['dialog'],30,16,textX,textY);
    ctx3.fillStyle = "black";
    ctx3.font = '30px sans-serif';
    ctx3.fillText(text,50,50);
}


dialogBox = function() {

    ctx3.drawImage(img['dialog'],0,0,195,49,100,560,750,225);

    if(isMission.heatDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('*It suddenly gets hot in here*',125,620);
        ctx3.fillText('*Maybe I should ask Master Ark about this*',125,660);
        ctx3.fillText('*He should be in the middle of CPU*',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.arkDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('It seems like the fan had a problem!',125,620);
        ctx3.fillText('Go to Fan Base and talk to Stan.',125,660);
        ctx3.fillText('*I think Fan Base is up North from here*',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.stanDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Help!',125,620);
        ctx3.fillText('It is getting really hot!.',125,660);
        ctx3.fillText('The fan suddenly stopped.',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.stanDialog2) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Ah! Now it is too cold!',125,620);
        ctx3.fillText('I think the power supply is having a problem too.',125,660);
        ctx3.fillText('Power Supply Room is right next to CPU.',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.electroDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('It seems like the power cable has been plugged out.',125,620);
        ctx3.fillText('Can you plug it in back?',125,660);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.electroDialog2) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Thank you for helping me.',125,620);
        ctx3.fillText('By the way, Master Ark wanted to meet you.',125,660);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.arkDialog2) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('There is a disturbance at Internet Port!',125,620);
        ctx3.fillText('I think the Virus is coming to attack the village.',125,660);
        ctx3.fillText('Here, take this Antivirus and kill them.',125,700);
        ctx3.fillText('Internet Port is on the left from here.',125,740);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.virusDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('There is too many of them!',125,620);
        ctx3.fillText('And some have made their way to Storage Room.',125,660);
        ctx3.fillText('I have to stop them!',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.virusDialog2) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('They have invaded the Storage Room.',125,620);
        ctx3.fillText('I need to find another way to go to the Storage Room.',125,660);
        ctx3.fillText('Maybe I should ask Master Ark.',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.arkDialog3) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('You can go to Storage Room through Ram Slot.',125,620);
        ctx3.fillText('Ram Slot is down there.',125,660);
        ctx3.fillText('But, be careful.',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.ramDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('It seems like the virus caused this place to be laggy.',125,620);
        ctx3.fillText('I need to find the way to the Storage Room quickly.',125,660);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.ramDialog2) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Finally I made it to the Storage Room.',125,620);
        ctx3.fillText('Now I need to find the virus main body.',125,660);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.bossDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Ah! It trying to attack all the data.',125,620);
        ctx3.fillText('I need to protect it!',125,660);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.finalDialog) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('*Now this village is safe again*',125,620);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    checkMission = true;
}


eduFact = function() {

    ctx3.drawImage(img['dialog'],0,0,195,49,100,500,750,285);

    if(isMission.cpuFact) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.drawImage(img['eduCpu'],0,0,808,477,400,560,120,80);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('CPU Fact',125,560);
        ctx3.fillText('A Central Processing Unit is an important part of every computer.',125,660);
        ctx3.fillText('The CPU sends signals to control the other parts of the computer,',125,700);
        ctx3.fillText('almost like how a brain controls a body.',125,740);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.fanFact) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.drawImage(img['eduFan'],0,0,500,333,400,560,120,80);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Fan Fact',125,560);
        ctx3.fillText('Fans are used to draw cooler air into the case from the outside,',125,660);
        ctx3.fillText('expel warm air from inside and',125,700);
        ctx3.fillText('move air across a heat sink to cool a particular component.',125,740);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.supplyFact) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.drawImage(img['eduSupply'],0,0,1804,1662,400,560,120,80);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Supply Fact',125,560);
        ctx3.fillText('Power supply is an electrical device that supplies electric power.',125,660);
        ctx3.fillText('A power supply unit converts mains AC to',125,700);
        ctx3.fillText('low-voltage regulated DC power for the internal components of a computer',125,740);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.internetFact) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.drawImage(img['eduInternet'],0,0,259,194,400,560,120,80);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Internet Fact',125,560);
        ctx3.fillText('A network interface controller is a computer hardware component',125,660);
        ctx3.fillText('that connects a computer to a computer network.',125,700);
        ctx3.fillText('*He should be in the middle of CPU*',125,740);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.ramFact) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.drawImage(img['eduRam'],0,0,1200,626,400,560,120,80);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Ram Fact',125,560);
        ctx3.fillText('RAM gives applications a place to store and access data on a short-term basis.',125,660);
        ctx3.fillText('It stores the information your computer is actively using so that',125,700);
        ctx3.fillText('it can be accessed quickly.',125,740);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    else if(isMission.storageFact) {
        ctx3.save();
        ctx3.fillStyle = "black";
        ctx3.drawImage(img['eduStorage'],0,0,257,196,400,560,120,80);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Storage Fact',125,560);
        ctx3.fillText('Storage is the component of your computer that allows you to store',125,660);
        ctx3.fillText('and access data on a long-term basis.',125,700);
        ctx3.font = '20px sans-serif';
        ctx3.fillText('Press E',755,760);
        ctx3.restore();
    }
    factCheck = true;
}

endFunc = function() {

    end = true;

    ctxEnd.clearRect(0,0,1000,800);

    ctxEnd.save();
    ctxEnd.fillStyle = "white";
    ctxEnd.font = '80px sans-serif';
    ctxEnd.fillText('The End',125,620);
    ctxEnd.font = '50px sans-serif';
    ctxEnd.fillText('Thank you for playing',125,700);
    ctxEnd.font = '20px sans-serif';
    ctxEnd.fillText('Press Space to continue.',125,760);
    ctxEnd.restore();

    if(endNext && end) {
        window.location.replace("index.html");
    }
}
