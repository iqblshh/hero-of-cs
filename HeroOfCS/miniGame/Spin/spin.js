const canvasSpin = document.getElementById('spin');
const ctxSpin = canvasSpin.getContext('2d');
const WIDTH_SPIN = canvasSpin.width;
const HEIGHT_SPIN = canvasSpin.height;

const canvasSpin2 = document.getElementById('spin2');
const ctxSpin2 = canvasSpin2.getContext('2d');

ctxSpin.translate(250, 250);
ctxSpin2.translate(250, 250);

//const SCALE = 33;

var spin;
var spinCount = 0;
var oldSpd = 0;
var newSpd = 0;

ctxSpin.font = "20px Arial";
ctxSpin.fillText("Space Button", -60, 230);
ctxSpin.strokeRect(-100, 205, 200, 40);

ctxSpin.fillText("Press 'Space' when the box turn blue to spin the fan.", -230, 300);

Spin = function() {

	var self = {
        x: 0,
        y: 0,
		spinSpeed: 1,
    };

	self.update = function() {

		self.updateSpin();
		self.drawSpin();
	}

	self.updateSpin = function() {

		ctxSpin.rotate(self.spinSpeed * Math.PI / 180);
	}

	self.drawSpin = function() {

		ctxSpin.fillRect(0, -10, 200, 20);
	}

	return self;
}

SpinBox = function() {

	self.spinCheck = function() {
		spinCount++;

		if(spinCount == 32) {
			ctxSpin2.save();
			ctxSpin2.fillStyle = "blue"
			ctxSpin2.fillRect(-100, 205, 200, 40);
			ctxSpin2.restore();
		}
		else if(spinCount == 50) {
			ctxSpin2.clearRect(-100, 205, 200, 40);
			spinCount = 0;
		}

		if(spinCount >= 32 && spinCount <= 50 && self.isInteract) {

			if(oldSpd == newSpd) {
				spin.spinSpeed+=2;
			}
		}

		if(!self.isInteract) {
			oldSpd = newSpd;
		}
		else if(self.isInteract) {
			oldSpd++;
		}
	}

	self.isInteract = false;

	return self;
}

SpinGame = function() {
	ctxSpin.clearRect(-25,-25,226,50)

	spin.update();
	spinBox.spinCheck();

	if(spin.spinSpeed >= 16) {
		document.getElementById('win').play();
		alert("Now the is spinning back to normal.");
		missionTwo = setInterval(Two,40);
		isMission.fanFact = true;
		eduFact();
		canvasSpin.style.display = "none";
		canvasSpin2.style.display = "none";
		clearInterval(spinPlay);
	}
}


spin = Spin();
spinBox = SpinBox();
