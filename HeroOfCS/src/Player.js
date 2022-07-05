Player = function() {

    var self = Entity('player','playerId',480,320,32*SCALE,32*SCALE,img['player'],'all',1,0,32,32);

    self.updatePosition = function() {

        var mapName;
        var leftBumper = {x:self.x,y:self.y+28};
        var rightBumper = {x:self.x+57,y:self.y+28};
        var upBumper = {x:self.x+28,y:self.y};
        var downBumper = {x:self.x+28,y:self.y+70};

        if(isMap.cpu) {    // CPU
            mapName = cpuMap;
        }
        else if(isMap.fan) {    // FAN
            mapName = fanMap;
        }
        else if(isMap.supply) {    // SUPPLY
            mapName = supplyMap;
        }
        else if(isMap.internet) {    // INTERNET
            mapName = internetMap;
        }
        else if(isMap.ram) {    // RAM
            mapName = ramMap;
        }
        else if(isMap.storage) {    // STORAGE
            mapName = storageMap;
        }

        if(self.goingDown && !mapName.isCollideWall(downBumper)) {
            self.y += self.spd;
            self.srcY = 0; //front frame
          }
        if(self.goingUp && !mapName.isCollideWall(upBumper)) {
            self.y -= self.spd;
            self.srcY = 3; //back frame
          }
        if(self.goingLeft && !mapName.isCollideWall(leftBumper)) {
            self.x -= self.spd;
            self.srcY = 1; //left frame
          }
        if(self.goingRight && !mapName.isCollideWall(rightBumper)) {
            self.x += self.spd;
            self.srcY = 2; //right frame
          }

        self.imageLoopHandler();

        //  !(player going out of bound)
        if(self.x < 0)
            self.x = 0;
        if(self.x > testMap.width - self.width)
            self.x = testMap.width - self.width;
        if(self.y < 0)
            self.y = 0;
        if(self.y > testMap.height - self.height)
            self.y = testMap.height - self.height;
    }

    self.imageLoopHandler = function() {

        if (self.goingDown||self.goingUp||self.goingLeft||self.goingRight) {
            if (frameCount % 6 === 0) {
                const IMAGE_LOOP = [1, 0, 1, 2];

                if (self.srcX <= 2) {
                    self.srcX = IMAGE_LOOP[i]
                    i++;

                    if (self.srcX == 2) {
                        i = 0;
                    }
                }
            }
        }

        if (!self.goingDown&&!self.goingUp&&!self.goingLeft&&!self.goingRight) {
            self.srcX = 1;
            i = 1;
        }
    }

    self.goingDown = false;
    self.goingUp = false;
    self.goingLeft = false;
    self.goingRight = false;
    self.spd = 15;
    self.isInteract = false;    // player press SPACE.
    self.isNext = false;    // player press E.

    return self;
}


document.onkeydown = function(e) {      // player movement on key pressed

    if(e.keyCode === 83) {    // s
        player.goingDown = true;
        maze.goingDown = true;
    }
    else if(e.keyCode === 87) {    // w
        player.goingUp = true;
        maze.goingUp = true;
    }
    else if(e.keyCode === 65) {    // a
        player.goingLeft = true;
        maze.goingLeft = true;
    }
    else if(e.keyCode === 68) {    // d
        player.goingRight = true;
        maze.goingRight = true;
    }
    else if(e.keyCode === 32) {    // space
        player.isInteract = true;
        spinBox.isInteract = true;
        endNext = true;
    }
    else if(e.keyCode === 69) {    // e
        player.isNext = true;
    }
    else if(e.keyCode === 86) {    //v
        actBox.vButton = true;
	}
    else if(e.keyCode === 66) {    //b
        actBox.bButton = true;
	}
    else if(e.keyCode === 78) {    //n
        actBox.nButton = true;
	}
    else if(e.keyCode === 77) {    //m
        actBox.mButton = true;
	}
}

document.onkeyup = function(e) {    // player movement on key released

    if(e.keyCode === 83) {    // s
        player.goingDown = false;
        maze.goingDown = false;
    }
    else if(e.keyCode === 87) {    // w
        player.goingUp = false;
        maze.goingUp = false;
    }
    else if(e.keyCode === 65) {    // a
        player.goingLeft = false;
        maze.goingLeft = false;
    }
    else if(e.keyCode === 68) {    // d
        player.goingRight = false;
        maze.goingRight = false;
    }
    else if(e.keyCode === 32) {    // space
        player.isInteract = false;
        spinBox.isInteract = false;
		endNext = false;
    }
    else if(e.keyCode === 69) {    // e
        player.isNext = false;
    }
    else if(e.keyCode === 86) {    //v
        actBox.vButton = false;
	}
    else if(e.keyCode === 66) {    //b
        actBox.bButton = false;
	}
    else if(e.keyCode === 78) {    //n
        actBox.nButton = false;
	}
    else if(e.keyCode === 77) {    //m
        actBox.mButton = false;
	}
}
