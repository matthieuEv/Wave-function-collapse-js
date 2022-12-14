const WIDTH = window.innerWidth+0.1*window.innerWidth;
const HEIGHT = window.innerHeight+0.1*window.innerHeight;

/* North South East West*/
const dict = {
    0: [[2, 4, 8, 9, 10, 12, 13, 14], [1, 2, 3, 5, 8, 9, 13, 15], [0, 1, 2, 4, 7, 8, 12, 15], [0, 2, 3, 4, 6, 9, 10, 15]],
    1: [[0, 1, 3, 5, 6, 7, 11, 15], [1, 2, 3, 5, 8, 9, 13, 15], [3, 5, 6, 9, 10, 11, 13, 14], [0, 2, 3, 4, 6, 9, 10, 15]],
    2: [[0, 1, 3, 5, 6, 7, 11, 15], [0, 4, 6, 7, 10, 11, 12, 14], [0, 1, 2, 4, 7, 8, 12, 15], [0, 2, 3, 4, 6, 9, 10, 15]],
    3: [[0, 1, 3, 5, 6, 7, 11, 15], [1, 2, 3, 5, 8, 9, 13, 15], [0, 1, 2, 4, 7, 8, 12, 15], [1, 5, 7, 8, 11, 12, 13, 14]],
    4: [[2, 8, 9, 10, 12, 13, 14], [0, 6, 7, 10, 11, 12, 14], [0, 1, 2, 4, 7, 8, 12, 15], [0, 2, 3, 4, 6, 9, 10, 15]],
    5: [[0, 1, 3, 5, 6, 7, 11, 15], [1, 2, 3, 5, 8, 9, 13, 15], [3, 6, 9, 10, 11, 13, 14], [1, 7, 8, 11, 12, 13, 14]],
    6: [[2, 4, 8, 9, 10, 12, 13, 14], [1, 2, 3, 5, 8, 9, 13, 15], [0, 1, 2, 4, 7, 8, 12, 15], [1, 5, 7, 8, 11, 12, 13, 14]],
    7: [[2, 4, 8, 9, 10, 12, 13, 14], [1, 2, 3, 5, 8, 9, 13, 15], [3, 5, 6, 9, 10, 11, 13, 14], [0, 2, 3, 4, 6, 9, 10, 15]],
    8: [[0, 1, 3, 5, 6, 7, 13, 15], [0, 4, 6, 7, 10, 11, 12, 14], [3, 5, 6, 9, 10, 11, 13, 14], [0, 2, 3, 4, 6, 9, 10, 15]],
    9: [[0, 1, 3, 5, 6, 7, 11, 15], [0, 4, 6, 7, 10, 11, 12, 14], [0, 1, 2, 4, 7, 8, 12, 15], [1, 5, 7, 8, 11, 12, 13, 14]],
    10: [[2, 4, 8, 9, 10, 12, 13, 14], [0, 4, 6, 7, 10, 11, 12, 14], [0, 1, 2, 4, 7, 8, 12, 15], [1, 5, 7, 8, 11, 12, 13, 14]],
    11: [[2, 4, 8, 9, 10, 12, 13, 14], [1, 2, 3, 5, 8, 9, 13, 15], [3, 5, 6, 9, 10, 11, 13, 14], [1, 5, 7, 8, 11, 12, 13, 14]],
    12: [[2, 4, 8, 9, 10, 12, 13, 14], [0, 4, 6, 7, 10, 11, 12, 14], [3, 5, 6, 9, 10, 11, 13, 14], [0, 2, 3, 4, 6, 9, 10, 15]],
    13: [[0, 1, 3, 5, 6, 7, 11, 15], [0, 4, 6, 7, 10, 11, 12, 14], [3, 5, 6, 9, 10, 11, 13, 14], [1, 5, 7, 8, 11, 12, 13, 14]],
    14: [[2, 4, 8, 9, 10, 12, 13, 14], [0, 4, 6, 7, 10, 11, 12, 14], [3, 5, 6, 9, 10, 11, 13, 14], [1, 5, 7, 8, 11, 12, 13, 14]],
    15: [[0, 1, 3, 5, 6, 7, 11, 15], [1, 2, 3, 5, 8, 9, 13, 15], [0, 1, 2, 4, 7, 8, 12, 15], [0, 2, 34, 6, 9, 10, 15]]
};

//Create the canvas, setup the width, height ans context
let canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.backgroundColor = 'black';
let ctx = canvas.getContext('2d');

//Create array to choose the tiles
const tile = new Array();

/**
 * Returns ctx to draw in the canvas.
 *
 * @param {number} color The color applied to the tiles.
 * @param {string} x The size of the tiles.
 * @return {CanvasRenderingContext2D} The context of the canvas.
 */
function drawCanvas(color, size) {

    //Init all the tiles to 0
    for(let i = 0; i < Math.round(WIDTH / (size * HEIGHT)); i++){
        for(let j = 0; j < 8; j++){
            tile[i] = 0;
        }
    }
    //clear the canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    processTile(size);

    //Draw the tiles in the canvas
    for (let i = 0; i < tile.length; i++) {
        for (let j = 0; j < tile[0].length; j++) {
            drawTile(ctx, i, j, Math.round(size * HEIGHT), Math.round(size * HEIGHT), color, tile[i][j], size);
        }
    }

    document.body.appendChild(canvas);
    return ctx;
}

/**
 * Draw all the tiles in the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x x pos of the tile.
 * @param {number} y y pos of the tile.
 * @param {number} w width of the tile.
 * @param {number} h height of the tile.
 * @param {string} color The color applied to the tiles.
 * @param {number} type The type of the tile.
 * @param {string} size The size of the tiles.
 */
function drawTile(ctx, x, y, w, h, color, type, size) {

    ctx.beginPath();
    ctx.fillStyle = type === 15 ? "black" : color;
    const actions = [];
    //design all the tiles
    switch (type) {
        case 0:
            
            break;
        
        case 1:
            actions.push([0.5, 0.4, 0.5, 0.2]);
            ctx.arc(x * w + 0.5 * Math.round(size * HEIGHT), y * h + 0.5 * Math.round(size * HEIGHT), Math.round(size * HEIGHT) * 0.2, 0, Math.PI * 2, 1);
            break;

        case 2:
            actions.push([0.4, 0.5, 0.2, 0.5]);
            ctx.arc(x * w + 0.5 * Math.round(size * HEIGHT), y * h + 0.5 * Math.round(size * HEIGHT), Math.round(size * HEIGHT) * 0.2, 0, Math.PI * 2, 1);
            break;

        case 3:
            actions.push([0.0, 0.4, 0.5, 0.2]);
            ctx.arc(x * w + 0.5 * Math.round(size * HEIGHT), y * h + 0.5 * Math.round(size * HEIGHT), Math.round(size * HEIGHT) * 0.2, 0, Math.PI * 2, 1);
            break;

        case 4:
            actions.push([0.4, 0.0, 0.2, 1.0]);
            break;

        case 5:
            actions.push([0.0, 0.4, 1.0, 0.2]);
            break;

        case 6:
            actions.push([0.0, 0.4, 0.6, 0.2]);
            actions.push([0.4, 0.0, 0.2, 0.6]);
            break;

        case 7:
            actions.push([0.5, 0.4, 0.6, 0.2]);
            actions.push([0.4, 0.0, 0.2, 0.6]);
            break;

        case 8:
            actions.push([0.5, 0.4, 0.6, 0.2]);
            actions.push([0.4, 0.4, 0.2, 0.6]);
            break;

        case 9:
            actions.push([0.0, 0.4, 0.6, 0.2]);
            actions.push([0.4, 0.5, 0.2, 0.6]);
            break;

        case 10:
            actions.push([0.4, 0.0, 0.2, 1.0]);
            actions.push([0.0, 0.4, 0.6, 0.2]);
            break;

        case 11:
            actions.push([0.0, 0.4, 1.0, 0.2]);
            actions.push([0.4, 0.0, 0.2, 0.6]);
            break;

        case 12:
            actions.push([0.4, 0.0, 0.2, 1.0]);
            actions.push([0.5, 0.4, 0.6, 0.2]);
            break;

        case 13:
            actions.push([0.0, 0.4, 1.0, 0.2]);
            actions.push([0.4, 0.5, 0.2, 0.6]);
            break;

        case 14:
            actions.push([0.0, 0.4, 1.0, 0.2]);
            actions.push([0.4, 0.0, 0.2, 1.0]);
            break;

        case 15:
            ctx.fillRect(x * w, y * h, w, h);
            break;
    }

    actions.forEach((values) => {
        ctx.fillRect(x * w + values[0] * Math.round(size * HEIGHT), y * h + values[1] * Math.round(size * HEIGHT), Math.round(size * HEIGHT) * values[2], Math.round(size * HEIGHT) * values[3]);
    });

    ctx.closePath();
    ctx.fill();
}


/**
 * Return the intersection of two arrays.
 * @param {array} a1 
 * @param {array} a2 
 * @returns Array
 */
function getArraysIntersection(a1, a2) {
    return a1.filter(function (n) {
        return a2.indexOf(n) !== -1;
    });
}


/**
 * Return a random position in the array
 * @param {array} array 
 * @returns number
 */
function randomTile(array){
    return Math.floor(Math.random() * array.length);
}


/**
 * Fill the list with matching tiles
 * @param {number} size 
 */
function processTile(size) {
    //create a 2d array of tiles
    for (let i = 0; i < tile.length; i++) {
        tile[i] = new Array(Math.round(HEIGHT / (size * HEIGHT)));
    }
    for (let i = 0; i < tile.length; i++) {
        for (let j = 0; j < tile[i].length; j++) {
            if (i === 0 && j === 0) {
                tile[0][0] = (Math.floor(Math.random() * 16));
            } else if (i === 0) {
                // dict[tile][N S E W][tile possible]
                tile[i][j] = dict[tile[i][j - 1]][1][randomTile(dict[tile[i][j - 1]][1])];
            } else {
                if (j === 0) {
                    tile[i][j] = dict[tile[i - 1][j]][2][randomTile(dict[tile[i - 1][j]][2])];
                } else {
                    tile[i][j] = getArraysIntersection(dict[tile[i][j - 1]][1], dict[tile[i - 1][j]][2])[randomTile(getArraysIntersection(dict[tile[i][j - 1]][1], dict[tile[i - 1][j]][2]))];
                }
            }
        }
    }
}

document.getElementById("size").oninput = function(){
    drawCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
};

document.getElementById("color").addEventListener("change", function () {
    drawCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
}, false);

document.getElementById("randomize").addEventListener("click", function () {
    drawCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
}, false);


drawCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);