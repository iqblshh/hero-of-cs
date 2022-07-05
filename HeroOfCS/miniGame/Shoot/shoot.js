const canvasShoot = document.getElementById('shoot');
const ctxShoot = canvasShoot.getContext('2d');
const WIDTH_SHOOT = canvasShoot.width;
const HEIGHT_SHOOT = canvasShoot.height;

const SCALE_SHOOT = 33;

var shoot;
var virusList = {};
var size;

var imgShoot = {};


ShootImageLoader = function(id,image) {     // Loading image asset.

    imgShoot[id] = new Image();
    imgShoot[id].src = "miniGame/Shoot/"+image;
}


ShootImageList = function() {

    ShootImageLoader('shoot','shoot.png');
}

ShootImageList();


Shoot = function() {

	var self = {
        x: 250,
        y: 250
    };

	self.drawShoot = function() {
		ctxShoot.drawImage(imgShoot['shoot'],self.x-25,self.y-25,50,50);
	}

	return self;
}


Virus = function(id,x,y,spdX,spdY) {

	var self = {
		id: id,
        x: x,
        y: y,
		spdX: spdX,
		spdY: spdY,
		width: 40,
		height: 40
    };

	virusList[id] = self;

	self.update = function() {
		self.updateVirus();
		self.drawVirus();
	}

	self.updateVirus = function() {

		self.x += self.spdX;
		self.y += self.spdY;

		if(self.x > WIDTH_SHOOT-self.width) {
			self.spdX = -(self.spdX);
		}
		if(self.x < 0) {
			self.spdX = -(self.spdX);
		}
		if(self.y > HEIGHT_SHOOT-self.height-100) {
			self.spdY = -(self.spdY);
		}
		if(self.y < 0) {
			self.spdY = -(self.spdY);
		}
	}

	self.drawVirus = function() {
		ctxShoot.fillStyle = "purple";
		ctxShoot.fillRect(self.x,self.y,self.width,self.height);
	}
	return self;
}

generateVirus = function() {

	var id = Math.random();
    var x = Math.random() * (WIDTH_SHOOT-40);
    var y = Math.random() * (HEIGHT_SHOOT-140);
	var spdX = Math.random() * 8;
	var spdY = Math.random() * 8;
	Virus(id,x,y,spdX,spdY);
}

document.onmousemove = function(evt) {      // player movement on key pressed
    shoot.x = evt.offsetX;
	shoot.y = evt.offsetY;
}

document.onclick = function(z) {
	for(var vkey2 in virusList) {
		if(shoot.x > virusList[vkey2].x && shoot.x < virusList[vkey2].x + virusList[vkey2].width && shoot.y >= virusList[vkey2].y && shoot.y <= virusList[vkey2].y + virusList[vkey2].height) {
			delete virusList[vkey2];
		}
	}
}

ShootGame = function() {

	ctxShoot.clearRect(0,0,WIDTH_SHOOT,HEIGHT_SHOOT)

    ctxShoot.save();
    ctxShoot.fillStyle = "black";
    ctxShoot.strokeRect(0,500,500,100);
    ctxShoot.font = "20px Arial";
    ctxShoot.fillText("Use 'W,A,S,D' to move the player.", 100, 550);
    ctxShoot.restore();

	for(var vkey in virusList) {
		virusList[vkey].update();
	}

	shoot.drawShoot();

	size = Object.keys(virusList).length;

	if(size <= 1) {
        document.getElementById('win').play();
		alert('You have cleared all the virus here.');
        missionFour = setInterval(Four,40);
        isMission.internetFact = true;
        eduFact();
		canvasShoot.style.display = "none";
		clearInterval(shootPlay);
	}
}


for(var v = 0;v < 11;v++) {
	generateVirus();
}


shoot = Shoot();
virus = Virus();
