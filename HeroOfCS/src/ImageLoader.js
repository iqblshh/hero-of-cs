var img = {};


ImageLoader = function(id,image) {     // Loading image asset.

    img[id] = new Image();
    img[id].src = 'asset/'+image;
}


ImageList = function() {

    ImageLoader('player','char/hero.png');
    ImageLoader('ark','char/ark.png');
    ImageLoader('stan','char/npc.png');
    ImageLoader('electro','char/npc.png');
    ImageLoader('surfer','char/npc.png');
    ImageLoader('task','char/npc.png');
    ImageLoader('boss','char/npc.png');

    ImageLoader('virus','char/virus2.png');

    ImageLoader('testMap','map/test.png');
    ImageLoader('cpu','map/cpu.png');
    ImageLoader('fan','map/fan.png');
    ImageLoader('supply','map/supply.png');
    ImageLoader('internet','map/internet.png');
    ImageLoader('ram','map/ram.png');
    ImageLoader('storage','map/storage.png');

    ImageLoader('dialog','dialog.png');

    ImageLoader('eduCpu','eduImage/cpuImage.png');
    ImageLoader('eduFan','eduImage/fanImage.jpg');
    ImageLoader('eduSupply','eduImage/supplyImage.jpg');
    ImageLoader('eduInternet','eduImage/internetImage.jpeg');
    ImageLoader('eduRam','eduImage/ramImage.jpg');
    ImageLoader('eduStorage','eduImage/storageImage.jpeg');
}

ImageList();
