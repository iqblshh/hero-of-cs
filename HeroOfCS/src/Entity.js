Entity = function(type,id,x,y,width,height,image,map,srcX,srcY,srcWidth,srcHeight) {    // for Player & NPC.

    var self = {
        type: type,     //Player or NPC
        id: id,     // name
        x: x,
        y: y,
        width: width,
        height: height,
        image: image,
        map: map,
        srcX: srcX,
        srcY: srcY,
        srcWidth: srcWidth,
        srcHeight: srcHeight,
    };

    self.updatePosition = function() {

        //add movement.
    }

    self.draw = function() {

        var x;
        var y;

        if(player.x >= WIDTH/2) {
            if(testMap.x <= WIDTH - testMap.width) {
                x = self.x - testMap.width + WIDTH;
            }
            else {
                x = self.x - player.x;
                x += WIDTH/2;
            }
        }
        else {
            x = self.x;
        }

        if(player.y >= HEIGHT/2) {
            if(testMap.y <= HEIGHT - testMap.height) {
                y = self.y - testMap.height + HEIGHT;
            }
            else {
                y = self.y - player.y;
                y += HEIGHT/2;
            }
        }
        else {
            y = self.y;
        }

        ctx.drawImage(self.image,self.srcX*self.srcWidth,self.srcY*self.srcHeight,self.srcWidth,self.srcHeight,x,y,self.width,self.height);
    }

    self.testCollision = function(entity2) {    // return (true/false) if collided.

        var rect1 = {
            x: self.x,
            y: self.y,
            width: self.width-16,   // distance between player and other npc will collide.
            height: self.height-8,
        };

        var rect2 = {
            x: entity2.x,
            y: entity2.y,
            width: entity2.width-16,
            height: entity2.height-8,
        };

        return testCollisionRect(rect1,rect2);
    }

    return self;
}


testCollisionRect = function(rect1,rect2) {

    return rect1.x <= rect2.x + rect2.width &&
           rect2.x <= rect1.x + rect1.width &&
           rect1.y <= rect2.y + rect2.height &&
           rect2.y <= rect1.y + rect1.height;
}
