const canvasPiano = document.getElementById("piano");
const ctxPiano = canvasPiano.getContext('2d');
const WIDTH_PIANO = canvasPiano.width;
const HEIGHT_PIANO = canvasPiano.height;

var actBox;
var pianoObj = {};
var framePiano = 0;	// Timer
var score = 0;
var health = 5;

GameImageLoader = function(image) {
    var img = {};
    img = new Image()
    img.src = image;
    return img;
}

Piano = function(id,pianoX,pianoSpd) {

	var self = {
		id: id,
		pianoX: pianoX,
		pianoY: -150,
		pianoWidth: 100,
		pianoHeight: 149,
		pianoImage: 'miniGame/Piano/hadoken.png',
		//currPianoY: currPianoY,
		pianoSpd: pianoSpd,
	}

	pianoObj[id]=self;

	self.update = function() {

		self.updatePiano();
		self.drawPiano();
	}

	self.updatePiano = function() {

		self.pianoY += self.pianoSpd;
	}

	self.drawPiano = function() {

		ctxPiano.drawImage(GameImageLoader(self.pianoImage),self.pianoX,self.pianoY,self.pianoWidth,self.pianoHeight);
	}
}

countSpeed = function() {

    var pianoSpeed;

    if(score <= 10) {
        pianoSpeed = 5;
    }
    else if(score <= 20) {
        pianoSpeed = 7;
    }
    else if(score <= 30) {
        pianoSpeed = 10;
    }
    else if(score <= 40) {
        pianoSpeed = 12;
    }
    else if(score > 40) {
        pianoSpeed = 15;
    }

    return pianoSpeed;
}

countPiano = function() {

    var pianoCount;

    if(score <= 5) {
        pianoCount = 20;
    }
    else if(score <= 10) {
        pianoCount = 25;
    }
    else if(score <= 15) {
        pianoCount = 15;
    }
    else if(score <= 20) {
        pianoCount = 20;
    }
    else if(score <= 25) {
        pianoCount = 10;
    }
    else if(score <= 30) {
        pianoCount = 15;
    }
    else if(score <= 35) {
        pianoCount = 10;
    }
    else if(score <= 40) {
        pianoCount = 15;
    }
    else if(score > 40) {
        pianoCount = 8;
    }

    return pianoCount;
}

generatePiano = function() {

	var id = Math.random();
	var i = Math.round(Math.random() * 3);
	var pianoX = (i % 4) * Math.ceil((WIDTH_PIANO-1)/4)+1;
	var pianoSpd = countSpeed();
	Piano(id,pianoX,pianoSpd)
}

actionBox = function() {

	self.drawBox = function() {

        var lX2;
        ctxPiano.font = "40px Arial";
        var keyText;

        for(var lX = 1; lX < 400; lX += 100) {
            ctxPiano.save();
            ctxPiano.fillStyle = 'white';
            ctxPiano.fillRect(lX,551,99,100);
            ctxPiano.restore();

            if(lX == 1) {
                keyText = "V";
            }
            else if(lX == 101) {
                keyText = "B";
            }
            else if(lX == 201) {
                keyText = "N";
            }
            else if(lX == 301) {
                keyText = "M";
            }
            ctxPiano.fillText(keyText, lX+35, 610);
        }

        if(self.vButton||self.bButton||self.nButton||self.mButton) {
            if(self.vButton) {
                lX2 = 1;
            }
            else if(self.bButton) {
                lX2 = 101;
            }
            else if(self.nButton) {
                lX2 = 201;
            }
            else if(self.mButton) {
                lX2 = 301;
            }
            ctxPiano.save();
    		ctxPiano.fillStyle = 'blue';
    		ctxPiano.fillRect(lX2,551,99,100);
            ctxPiano.restore();
        }
	}

	self.testKey = function(testObj) {

        if(vButton && testObj == 1) {
            return true;
        }
        else if(bButton && testObj == 101) {
            return true;
        }
        else if(nButton && testObj == 201) {
            return true;
        }
        else if(mButton && testObj == 301) {
            return true;
        }
        else {
            return false;
        }
	}

	self.vButton = false;
	self.bButton = false;
	self.nButton = false;
	self.mButton = false;

	return self;
}

pianoGame = function() {
	ctxPiano.clearRect(0,0,WIDTH_PIANO,HEIGHT_PIANO)
    ctxPiano.fillStyle = 'black'
	ctxPiano.fillRect(0,550,400,100);

    if(health == 0) {       // kalah
        health = 5;
        score = 0;
        pianoObj = {};
        framePiano = 0;
        alert('You failed to protect the data.');
    }

    if(score >= 65) {      // menang
        health = 5;
        score = 0;
        pianoObj = {};
        framePiano = 0;
        document.getElementById('win').play();
        document.getElementById('theme').play();
        document.getElementById('pianosong').pause();
        alert('You managed to protect the data.');
        isMission.storageFact = true;
        missionSix = setInterval(Six,40);
        clearInterval(pianoPlay);
        canvasPiano.style.display = "none";
    }

	framePiano++;

	if(framePiano % countPiano() === 0) {
        generatePiano();
    }

    for(var pKey in pianoObj) {
        if(pianoObj[pKey].pianoY >= 560 - pianoObj[pKey].pianoHeight && actBox.testKey(pianoObj[pKey].pianoX)) {
			delete pianoObj[pKey];
            score++;
			document.getElementById('player').cloneNode(true).play();
            break;
		}
		else if(pianoObj[pKey].pianoY > 600) {
			delete pianoObj[pKey];
			document.getElementById('player2').cloneNode(true).play();
            score++;
            health--;
            break;
		}
        else if(pianoObj[pKey].pianoY < 560 - pianoObj[pKey].pianoHeight && actBox.testKey(pianoObj[pKey].pianoX)) {
            if(framePiano % 5 === 0) {
                score--;
            }
            break;
        }
    }

	for(var pKey2 in pianoObj) {
		pianoObj[pKey2].updatePiano();
	}

    actBox.drawBox();
    for(var pKey3 in pianoObj) {
		pianoObj[pKey3].drawPiano();
    }
}

generatePiano();
actBox = actionBox();
