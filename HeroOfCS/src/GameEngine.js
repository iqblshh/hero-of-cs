gameLoop = function() {

    ctx.clearRect(0,0,WIDTH,HEIGHT);

    testMap.updateMapPosition();

    frameCount++;   // can be used as timer

    var pX = player.x;
    var pY = player.y;

    for(var key in npcList) {
        if(npcPosition(npcList[key].map)) {

            npcList[key].updatePosition();
        }
    }

    player.updatePosition();

    checkMap();

    for(var key2 in npcList) {
        if(npcPosition(npcList[key2].map)) {

            npcList[key2].draw();
        }
    }

    player.draw();
}

player = Player();
generateNpc();

playGame = setInterval(gameLoop,40);
missionOne = setInterval(One,40);
