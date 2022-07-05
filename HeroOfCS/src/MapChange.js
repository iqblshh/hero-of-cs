var isMap = {
    cpu: true,
    fan: false,
    supply: false,
    internet: false,
    ram: false,
    storage: false,
}


checkMap = function() {

    if(isMap.cpu) {    // CPU
        cpuMap.updateMap();
        mapName();

        if(player.x >= 570 && player.x <= 630 && player.y <= 20) {   // cpu > fan.
            isMap.cpu = false;
            isMap.fan = true;
            fanMap.updateMap();
            player.y = 1195;
        }
        else if(player.y >= 570 && player.y <= 675 && player.x >= 1200) {    // cpu > supply.
            isMap.cpu = false;
            isMap.supply = true;
            supplyMap.updateMap();
            player.x = 25;
        }
        else if(player.x >= 652 && player.x <= 727 && player.y >= 1200) {     // cpu > ram.
            isMap.cpu = false;
            isMap.ram = true;
            ramMap.updateMap();
            player.y = 25;
        }
        else if(player.y >= 545 && player.y <= 635 && player.x <= 20) {      // cpu > internet.
            isMap.cpu = false;
            isMap.internet = true;
            internetMap.updateMap();
            player.x = 1195;
        }
    }

    else if(isMap.fan) {    // FAN
        fanMap.updateMap();
        mapName();

        if(player.x >= 570 && player.x <= 630 && player.y >= 1200) {   // fan > cpu.
            isMap.fan = false;
            isMap.cpu = true;
            cpuMap.updateMap();
            player.y = 25;
        }
    }

    else if(isMap.supply) {    // SUPPLY
        supplyMap.updateMap();
        mapName();

        if(player.y >= 570 && player.y <= 675 && player.x <= 20) {     // supply > cpu.
            isMap.supply = false;
            isMap.cpu = true;
            cpuMap.updateMap();
            player.x = 1195;
        }
    }

    else if(isMap.internet) {    // INTERNET
        internetMap.updateMap();
        mapName();

        if(player.y >= 545 && player.y <= 635 && player.x >= 1200) {     // internet > cpu.
            isMap.internet = false;
            isMap.cpu = true;
            cpuMap.updateMap();
            player.x = 25;
        }
    }

    else if(isMap.ram) {    // RAM
        ramMap.updateMap();
        mapName();

        if(player.x >= 652 && player.x <= 727 && player.y <= 20) {     // ram > cpu.
            isMap.ram = false;
            isMap.cpu = true;
            cpuMap.updateMap();
            player.y = 1195;
        }
        else if(player.y >= 990 && player.y <= 1051 && player.x <= 20) {    // ram > storage.
            isMap.ram = false;
            isMap.storage = true;
            storageMap.updateMap();
            player.x = 1195;
        }
    }

    else if(isMap.storage) {    // STORAGE
        storageMap.updateMap();
        mapName();

        if(player.y >= 990 && player.y <= 1051 && player.x >= 1200) {     // storage > ram.
            isMap.storage = false;
            isMap.ram = true;
            fanMap.updateMap();
            player.x = 25;
        }
    }

}
