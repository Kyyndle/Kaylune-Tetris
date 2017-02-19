var canvasw = 640;
var canvash = 480;

var canvas;
var stage;

//BLOCK DEFININTIONS
//TODO: Redo the colors
var i = { blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'cyan'   };
var j = { blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'blue'   };
var l = { blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'orange' };
var o = { blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'yellow' };
var s = { blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'green'  };
var t = { blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'purple' };
var z = { blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'red'    };

function init() {
	//link 
	stage = new createjs.Stage("gameCanvas");
	
	preload();
	
}

function eachblock(type, x, y, dir, fn) {
	var bit, result, row = 0, col = 0, blocks = type.blocks[dir];
	for(bit = 0x8000; bit > 0; bit = bit >> 1) {
		//If the block fills the space, TODO
		if(blocks & bit) {
			fn(x + col, y + row);
		}
		
		//If the rotated piece leaves its bounds, have it go to the next row
		if(++col === 4) {
			col = 0;	
			++row;
		}
	}
}

//Returns true if any of the blocks required to place a position on
//the grid would be occupied
function occupied(type, x, y, dir) {
	var ret = false;
	
}