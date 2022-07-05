npc = function(type,id,x,y,width,height,image,map) {

    var self = Entity(type,id,x,y,width,height,image,map,1,0,32,33);
    npcList[id] = self;
}

npcPosition = function(mapPos) {

        if(isMap.cpu && mapPos == 'cpu') {
            return true;
        }
        else if(isMap.fan && mapPos == 'fan') {
            return true;
        }
        else if(isMap.supply && mapPos == 'supply') {
            return true;
        }
        else if(isMap.internet && mapPos == 'internet') {
            return true;
        }
        else if(isMap.ram && mapPos == 'ram') {
            return true;
        }
        else if(isMap.storage && mapPos == 'storage') {
            return true;
        }
}

generateNpc = function() {

    npc('npc','Ark',640,640,32*SCALE,32*SCALE,img['ark'],'cpu');
    npc('npc','Stan',640,600,32*SCALE,32*SCALE,img['stan'],'fan');
    npc('npc','Electro',950,600,32*SCALE,32*SCALE,img['electro'],'supply');
    npc('npc','SilverSurfer',1000,470,32*SCALE,32*SCALE,img['surfer'],'internet');
    npc('npc','ManagerTask',590,40,32*SCALE,32*SCALE,img['task'],'ram');
    npc('npc','Boss',1060,970,32*SCALE,32*SCALE,img['boss'],'storage');

    //virus posittion
    npc('npc','virus1',325,620,32*SCALE,32*SCALE,img['virus'],'internet');
    npc('npc','virus2',430,725,32*SCALE,32*SCALE,img['virus'],'internet');
    npc('npc','virus3',505,935,32*SCALE,32*SCALE,img['virus'],'internet');
    npc('npc','virus4',370,935,32*SCALE,32*SCALE,img['virus'],'internet');
    npc('npc','virus5',505,605,32*SCALE,32*SCALE,img['virus'],'internet');
    npc('npc','virus6',835,400,32*SCALE,32*SCALE,img['virus'],'ram');
    npc('npc','virus7',745,565,32*SCALE,32*SCALE,img['virus'],'ram');
    npc('npc','virus8',520,520,32*SCALE,32*SCALE,img['virus'],'ram');
    npc('npc','virus9',475,760,32*SCALE,32*SCALE,img['virus'],'ram');
    npc('npc','virus10',355,430,32*SCALE,32*SCALE,img['virus'],'ram');
    npc('npc','virus11',45,250,32*SCALE,32*SCALE,img['virus'],'storage');
    npc('npc','virus12',135,220,32*SCALE,32*SCALE,img['virus'],'storage');
    npc('npc','virus13',585,115,32*SCALE,32*SCALE,img['virus'],'storage');
    npc('npc','virus14',75,430,32*SCALE,32*SCALE,img['virus'],'storage');
    npc('npc','virus15',0,535,32*SCALE,32*SCALE,img['virus'],'storage');

}
