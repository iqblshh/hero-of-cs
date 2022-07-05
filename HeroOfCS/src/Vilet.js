//vilet
Vilet = function() {

    var self = Entity('npc','Vilet',480,320,32*SCALE,32*SCALE,img['player'],'all',1,0,32,32);

    self.updatePosition = function() {

        if(player.goingDown) {
            self.goingDown = true;
            self.x = player.x;
            self.y = player.y - 50;
            self.srcY = 0; //front frame
        }
        if(player.goingUp) {
            self.goingUp = true;
            self.x = player.x;
            self.y = player.y + 50;
            self.srcY = 3; //back frame
        }
        if(player.goingLeft) {
            self.goingLeft = true;
            self.x = player.x + 50;
            self.y = player.y;
            self.srcY = 1; //left frame
        }
        if(player.goingRight) {
            self.goingRight = true;
            self.x = player.x - 50;
            self.y = player.y;
            self.srcY = 2; //right frame
        }
        if(!player.goingDown&&!player.goingUp&&!player.goingLeft&&!player.goingRight) {
            self.goingDown = false;
            self.goingUp = false;
            self.goingLeft = false;
            self.goingRight = false;
        }

        self.imageLoopHandler();
    }

    self.imageLoopHandler = function() {

        if (self.goingDown||self.goingUp||self.goingLeft||self.goingRight) {
            if (frameCount % 6 === 0) {
                const VILET_LOOP = [1, 0, 1, 2];

                if (self.srcX <= 2) {
                    self.srcX = VILET_LOOP[l]
                    l++;

                    if (self.srcX == 2) {
                        l = 0;
                    }
                }
            }
        }

        if (!self.goingDown&&!self.goingUp&&!self.goingLeft&&!self.goingRight) {
            self.srcX = 1;
            l = 1;
        }
    }
    
    self.goingDown = false;
    self.goingUp = false;
    self.goingLeft = false;
    self.goingRight = false;
   
    return self;
}