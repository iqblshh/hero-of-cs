const canvasMaze = document.getElementById('maze');
const ctxMaze = canvasMaze.getContext('2d');
const WIDTH_MAZE = canvasMaze.width;
const HEIGHT_MAZE = canvasMaze.height;

const canvasMaze2 = document.getElementById('maze2');
const ctxMaze2 = canvasMaze2.getContext('2d');

const MAZE_SCALE = 33;

var maze;

ctxMaze2.save();
ctxMaze2.font = "20px Arial";
ctxMaze2.fillText("Use 'W,A,S,D' to move the player.", 100, 550);
ctxMaze2.fillStyle = "white";
ctxMaze2.fillRect(0, 0, 495,105);
ctxMaze2.restore();

Maze = function() {

	var self = {
        x: 0,
        y: 0,
		mazeSpeed: 33,
    };

	self.update = function() {

		self.updateMaze();
		self.drawMaze();
	}

	self.updateMaze = function() {

		self.pastX = self.x;
		self.pastY = self.y;

		var upRect = {x:self.x,y:self.y-MAZE_SCALE};
		var downRect = {x:self.x,y:self.y+MAZE_SCALE};
		var leftRect = {x:self.x-MAZE_SCALE,y:self.y};
		var rightRect = {x:self.x+MAZE_SCALE,y:self.y};

		if(self.goingUp && mMap.mazeColliding(upRect)) {
			self.y -= self.mazeSpeed;
		}
		else if(self.goingDown && mMap.mazeColliding(downRect)) {
			self.y += self.mazeSpeed;
		}
		else if(self.goingLeft && mMap.mazeColliding(leftRect)) {
			self.x -= self.mazeSpeed;
		}
		else if(self.goingRight && mMap.mazeColliding(rightRect)) {
			self.x += self.mazeSpeed;
		}

		if(self.x < 0) {
            self.x = 0;
		}
        if(self.x > WIDTH_MAZE - MAZE_SCALE) {
            self.x = WIDTH_MAZE - MAZE_SCALE;
		}
        if(self.y < 0) {
            self.y = 0;
		}
        if(self.y > HEIGHT_MAZE - MAZE_SCALE) {
            self.y = HEIGHT_MAZE - MAZE_SCALE;
		}
	}

	self.drawMaze = function() {

		ctxMaze.save();
		ctxMaze.fillStyle = 'red';
		ctxMaze.fillRect(self.x,self.y,MAZE_SCALE,MAZE_SCALE);
		ctxMaze.restore();

		ctxMaze.save();
		ctxMaze.fillStyle = '#ff726f';
		ctxMaze.fillRect(self.pastX,self.pastY,MAZE_SCALE,MAZE_SCALE);
		ctxMaze.restore();

	}

	self.pastX;
	self.pastY;
	self.goingUp = false;
	self.goingDown = false;
	self.goingLeft = false;
	self.goingRight = false;

	return self;
}


MazeMap = function(rowTileCount,colTileCount,grid) {

	var self = {
		rowTileCount: rowTileCount,
		colTileCount: colTileCount,
		grid: grid
	}

	self.gridPos = function() {

		for (var r = 0; r < self.rowTileCount; r++) {
        	for (var c = 0; c < self.colTileCount; c++) {
            	var tile = self.grid[r][c];
            	if(tile === 0) {
					ctxMaze.fillStyle = 'black';
					ctxMaze.fillRect(c*MAZE_SCALE-MAZE_SCALE,r*MAZE_SCALE-MAZE_SCALE,c*MAZE_SCALE,r*MAZE_SCALE);
            	}
				else if(tile === 1){
					ctxMaze.fillStyle = 'white';
					ctxMaze.fillRect(c*MAZE_SCALE-MAZE_SCALE,r*MAZE_SCALE-MAZE_SCALE,c*MAZE_SCALE,r*MAZE_SCALE);
				}
				else{
					ctxMaze.fillStyle = 'blue';
					ctxMaze.fillRect(c*MAZE_SCALE-MAZE_SCALE,r*MAZE_SCALE-MAZE_SCALE,c*MAZE_SCALE,r*MAZE_SCALE);
				}
        	}
		}
    }

	self.mazeColliding = function(tp) {
		var grX = Math.floor((tp.x + MAZE_SCALE) / MAZE_SCALE);
		var grY = Math.floor((tp.y + MAZE_SCALE) / MAZE_SCALE);

		var collTile = self.grid[grY][grX];

		if(collTile == 0) {
			return false;
		}
		else if(collTile == 1) {
			return true;
		}
		else{
			ctxMaze.clearRect(0,0,WIDTH_MAZE,HEIGHT_MAZE);
			maze.x = 0;
			maze.y = 0;
			player.goingDown = false;
			document.getElementById('win').play();
			alert("It's plugged in.");
			missionThree = setInterval(Three,40);
			isMission.supplyFact = true;
			eduFact();
	        canvasMaze.style.display = "none";
			canvasMaze2.style.display = "none";
			clearInterval(mazePlay);
		}
	}

	self.gridPos();

	return self;
}


mMap = MazeMap(16,16,[
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
[0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
[0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
[0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
[0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0],
[0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
[0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
[0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
[0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
[0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
[0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
[0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
[0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 2, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]);


MazeGame = function() {

	maze.update();
}

maze = Maze();
