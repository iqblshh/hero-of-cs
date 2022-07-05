var isMission = {
    heatDialog: true,
    arkDialog: false,
    stanDialog: false,
    stanDialog2: false,
    electroDialog: false,
    virusDialog: false,
    virusDialog2: false,
    arkDialog3: false,
    ramDialog: false,
    ramDialog2: false,
    storageDialog: false,
    bossDialog: false,
    finalDialog: false,
    cpuFact: false,
    fanFact: false,
    supplyFact: false,
    internetFact: false,
    ramFact: false,
    storageFact: false
}

checkFact = function() {
    if(player.isNext && factCheck) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);
        factCheck = false;

        if(isMission.cpuFact) {
            isMission.cpuFact = false;
        }

        if(isMission.fanFact) {
            isMission.fanFact = false;
            isMission.stanDialog2 = true;
        }

        if(isMission.supplyFact) {
            isMission.supplyFact = false;
            isMission.electroDialog2 = true;
        }

        if(isMission.internetFact) {
            isMission.internetFact = false;
            isMission.virusDialog2 = true;
        }

        if(isMission.ramFact) {
            isMission.ramFact = false;
            isMission.ramDialog2 = true;
        }

        if(isMission.storageFact) {
            isMission.storageFact = false;
            isMission.finalDialog = true;
        }

        playGame = setInterval(gameLoop,40);
    }
}

checkDialog = function() {
    if(player.isNext && checkMission) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);
        checkMission = false;

        if(isMission.heatDialog) {
            document.getElementById('theme').play();
        }

        if(isMission.stanDialog) {
            canvasSpin.style.display = "block";
            canvasSpin2.style.display = "block";
            spinPlay = setInterval(SpinGame,33);
            isMission.stanDialog = false;
            clearInterval(missionOne);
            clearInterval(playGame);
            return;
        }

        if(isMission.electroDialog) {
            canvasMaze2.style.display = "block";
            canvasMaze.style.display = "block";
            mazePlay = setInterval(MazeGame,150);
            isMission.electroDialog = false;
            clearInterval(missionTwo);
            clearInterval(playGame);
            return;
        }

        if(isMission.virusDialog) {
            canvasShoot.style.display = "block";
            shootPlay = setInterval(ShootGame,33);
            isMission.virusDialog = false;
            clearInterval(missionThree);
            clearInterval(playGame);
            return;
        }

        if(isMission.ramDialog) {
            isMission.ramDialog = false;
            isMission.ramFact = true;
            clearInterval(missionFour);
            missionFive = setInterval(Five,40);
            clearInterval(playGame);
        }

        if(isMission.bossDialog) {
            document.getElementById('theme').pause();
            document.getElementById('pianosong').play();
            canvasPiano.style.display = "block";
            pianoPlay = setInterval(pianoGame,40);
            isMission.bossDialog = false;
            clearInterval(missionFive);
            clearInterval(playGame);
            return;
        }

        if(isMission.finalDialog) {
            isMission.finalDialog = false;
            canvasEnd.style.display = "block";
            setInterval(endFunc,40);
            return;
        }

        isMission.heatDialog = false;
        isMission.arkDialog = false;

        isMission.electroDialog2 = false;
        isMission.arkDialog2 = false;

        isMission.stanDialog2 = false;

        isMission.virusDialog2 = false;

        isMission.arkDialog3 = false;

        isMission.ramDialog2 = false;

        playGame = setInterval(gameLoop,40);
    }
}


One = function() {      // mission one run at the start of the game

    if(frameCount % 25 == 0 && isMission.heatDialog) {
        document.getElementById('front').style.background = "red";
        document.getElementById('front').style.opacity = 0.2;
        isMission.cpuFact = true;
        dialogBox();
        clearInterval(playGame);
    }
    if(player.isInteract && player.x >= npcList['Ark'].x - 50 && player.x <= npcList['Ark'].x + 50 && player.y >= npcList['Ark'].y - 50 && player.y <= npcList['Ark'].y + 50 && isMap.cpu && isMission.cpuFact) {
        eduFact();
        clearInterval(playGame);
    }

    if(player.isInteract && player.x >= npcList['Ark'].x - 50 && player.x <= npcList['Ark'].x + 50 && player.y >= npcList['Ark'].y - 50 && player.y <= npcList['Ark'].y + 50 && isMap.cpu && !(isMission.cpuFact)) {
        isMission.arkDialog = true;
        dialogBox();
        clearInterval(playGame);
    }

    if(player.isInteract && player.x >= npcList['Stan'].x - 50 && player.x <= npcList['Stan'].x + 50 && player.y >= npcList['Stan'].y - 50 && player.y <= npcList['Stan'].y + 50 && isMap.fan) {
        isMission.stanDialog = true;
        dialogBox();
        clearInterval(playGame);
    }

    checkFact();
    checkDialog();
}


Two = function() {      // mission one run at the start of the game

    if(frameCount % 25 == 0 && isMission.stanDialog2 && !(isMission.fanFact)) {
        document.getElementById('front').style.background = "blue";
        document.getElementById('front').style.opacity = 0.2;
        dialogBox();
        clearInterval(playGame);
    }

    if(player.isInteract && player.x >= npcList['Electro'].x - 50 && player.x <= npcList['Electro'].x + 50 && player.y >= npcList['Electro'].y - 50 && player.y <= npcList['Electro'].y + 50 && isMap.supply) {
        isMission.electroDialog = true;
        dialogBox();
        clearInterval(playGame);
    }

    checkFact();
    checkDialog();
}


Three = function() {      // mission one run at the start of the game

    if(frameCount % 25 == 0 && isMission.electroDialog2 && !(isMission.supplyFact)) {
        document.getElementById('front').style.background = "";
        document.getElementById('front').style.opacity = "";
        dialogBox();
        clearInterval(playGame);
    }

    if(player.isInteract && player.x >= npcList['Ark'].x - 50 && player.x <= npcList['Ark'].x + 50 && player.y >= npcList['Ark'].y - 50 && player.y <= npcList['Ark'].y + 50 && isMap.cpu) {
        isMission.arkDialog2 = true;
        dialogBox();
        clearInterval(playGame);
    }

    if(player.x <= 1000 && isMap.internet) {
        isMission.virusDialog = true;
        dialogBox();
        clearInterval(playGame);
    }

    checkFact();
    checkDialog();
}


Four = function() {      // mission one run at the start of the game

    if(frameCount % 25 == 0 && isMission.virusDialog2 && !(isMission.internetFact)) {
        dialogBox();
        clearInterval(playGame);
    }

    if(player.isInteract && player.x >= npcList['Ark'].x - 50 && player.x <= npcList['Ark'].x + 50 && player.y >= npcList['Ark'].y - 50 && player.y <= npcList['Ark'].y + 50 && isMap.cpu) {
        isMission.arkDialog3 = true;
        dialogBox();
        clearInterval(playGame);
    }

    if(isMap.ram && player.y >= 30) {
        isMission.ramDialog = true;
        player.spd = 5;
        dialogBox();
        clearInterval(playGame);
    }

    checkFact();
    checkDialog();
}



Five = function() {      // mission one run at the start of the game

    if(isMap.storage && isMission.ramFact) {
        eduFact();
        clearInterval(playGame);
    }

    if(frameCount % 25 == 0 && isMap.storage && isMission.ramDialog2 && !(isMission.ramFact)) {
        player.spd = 15;
        dialogBox();
        clearInterval(playGame);
    }

    if(isMap.storage && player.x <= 490 && player.y <= 430) {
        isMission.bossDialog = true;
        dialogBox();
        clearInterval(playGame);
    }

    checkFact();
    checkDialog();
}


Six = function() {      // mission one run at the start of the game

    if(isMission.storageFact) {
        eduFact();
        clearInterval(playGame);
    }

    if(frameCount % 25 == 0 && isMission.finalDialog && !(isMission.storageFact)) {
        dialogBox();
        clearInterval(playGame);
    }

    checkFact();
    checkDialog();
}
/*************************************************************************

var isMission = {
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
}

// checkMission = false
One = function() {

    if(frameCount % 75 == 0 && !checkMission) {
        document.getElementById('front').style.background = "red";
        document.getElementById('front').style.opacity = 0.2;

        dialogBox = true;
        ctx3.fillRect(100,450,750,185);
        ctx3.save();
        ctx3.fillStyle = "white";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Well hello there!',125,490);
        ctx3.fillText('Go to Fan and talk to Stan. He should be up north.',125,520);
        ctx3.fillText('Press E',735,620);
        ctx3.restore();

        clearInterval(playGame);
    }

    if(player.isInteract && player.x >= npcList['Stan'].x - 50 && player.x <= npcList['Stan'].x + 50 && player.y >= npcList['Stan'].y - 50 && player.y <= npcList['Stan'].y + 50) {
        dialogBox = true;
        ctx3.fillRect(100,450,750,185);
        ctx3.save();
        ctx3.fillStyle = "white";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Well hello there!',125,490);
        ctx3.fillText('Go to power supply and see Electro. He should be east from cpu',125,520);
        ctx3.fillText('Press E',735,620);
        ctx3.restore();

        document.getElementById('front').style.background = "";
        document.getElementById('front').style.opacity = "";

        clearInterval(playGame);
    }

    if(player.isNext && dialogBox) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);

        if(checkMission) {
            missionTwo = setInterval(Two,40);
            dialogBox = false;
            clearInterval(missionOne);
        }

        checkMission = true;
        playGame = setInterval(gameLoop,40);
        dialogBox = false;
    }
}


// checkMission = true
Two = function() {

    if(player.isInteract && player.x >= npcList['Electro'].x - 50 && player.x <= npcList['Electro'].x + 50 && player.y >= npcList['Electro'].y - 50 && player.y <= npcList['Electro'].y + 50) {
        dialogBox = true;
        ctx3.fillRect(100,450,750,185);
        ctx3.save();
        ctx3.fillStyle = "white";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Well hello there!',125,490);
        ctx3.fillText('Go talk with Internet. He will be on the west side of ComputerLand',125,520);
        ctx3.fillText('Press E',735,620);
        ctx3.restore();

        clearInterval(playGame);
    }

    if(player.isNext && dialogBox) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);

        if(checkMission) {
            missionThree = setInterval(Three,40);
            dialogBox = false;
            clearInterval(missionTwo);
        }

        playGame = setInterval(gameLoop,40);
        dialogBox = false;
    }
}


// checkMission = true
Three = function() {

    if(player.isInteract && player.x >= npcList['SilverSurfer'].x - 50 && player.x <= npcList['SilverSurfer'].x + 50 && player.y >= npcList['SilverSurfer'].y - 50 && player.y <= npcList['SilverSurfer'].y + 50) {
        dialogBox = true;
        ctx3.fillRect(100,450,750,185);
        ctx3.save();
        ctx3.fillStyle = "white";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Well hello there!',125,490);
        ctx3.fillText('Go to ram. I think you should take a right turn from here to meet Manager Task',125,520);
        ctx3.fillText('Press E',735,620);
        ctx3.restore();

        clearInterval(playGame);
    }

    if(player.isNext && dialogBox) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);

        if(checkMission) {
            missionFour = setInterval(Four,40);
            dialogBox = false;
            clearInterval(missionThree);
        }

        playGame = setInterval(gameLoop,40);
        dialogBox = false;
    }
}

// checkMission = true
Four = function() {

    if(player.isInteract && player.x >= npcList['ManagerTask'].x - 50 && player.x <= npcList['ManagerTask'].x + 50 && player.y >= npcList['ManagerTask'].y - 50 && player.y <= npcList['ManagerTask'].y + 50) {
        dialogBox = true;
        ctx3.fillRect(100,450,750,185);
        ctx3.save();
        ctx3.fillStyle = "white";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('Well hello there!',125,490);
        ctx3.fillText('Go to storage and you will meet the boss. Follow this passage to meet him',125,520);
        ctx3.fillText('Press E',735,620);
        ctx3.restore();

        clearInterval(playGame);
    }

    if(player.isNext && dialogBox) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);

        if(checkMission) {
            missionFive = setInterval(Five,40);
            dialogBox = false;
            clearInterval(missionFour);
        }

        playGame = setInterval(gameLoop,40);
        dialogBox = false;
    }
}


// checkMission = true
Five = function() {

    if(player.isInteract && player.x >= npcList['Boss'].x - 50 && player.x <= npcList['Boss'].x + 50 && player.y >= npcList['Boss'].y - 50 && player.y <= npcList['Boss'].y + 50) {

        dialogBox = true;
        ctx3.fillRect(100,450,750,185);
        ctx3.save();
        ctx3.fillStyle = "white";
        ctx3.font = '30px sans-serif';
        ctx3.fillText('You will meet demise!',125,490);
        ctx3.fillText('Press E',735,620);
        ctx3.restore();

        clearInterval(playGame);
    }

    if(player.isNext && dialogBox) {
        ctx3.clearRect(0,450,WIDTH,HEIGHT);
        dialogBox = false;
        canvasPiano.style.display = "block";
        document.getElementById('pianoData').style.display = "block";
        pianoPlay = setInterval(pianoGame,40);
        clearInterval(missionFive);
    }
}

********************************************************************************/
