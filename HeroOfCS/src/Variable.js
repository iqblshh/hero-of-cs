const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const ctx2 = document.getElementById('front').getContext('2d');
const ctx3 = document.getElementById('dialog').getContext('2d');
const ctx4 = document.getElementById('map').getContext('2d');

const canvasEnd = document.getElementById('end');
const ctxEnd = canvasEnd.getContext('2d');


const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const SCALE = 1.8;
const TILE_SIZE = 32;


var player;
var npcList = {};
var frameCount = 0;


var checkMission = false;   // on/off switch for mission
var factCheck = false;
var end = false;
var endNext;


var isRunning = {};     // Game mission running.
