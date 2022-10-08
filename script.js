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


let canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.backgroundColor = 'black';

let ctx = canvas.getContext('2d');

const tile = new Array();

function createCanvas(color, size) {

    for(let i = 0; i < Math.round(WIDTH / (size * HEIGHT)); i++){
        for(let j = 0; j < 8; j++){
            tile[i] = 0;
        }
    }
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    processTile(size);
    for (let i = 0; i < tile.length; i++) {
        for (let j = 0; j < tile[0].length; j++) {
            drawTile(ctx, i, j, Math.round(size * HEIGHT), Math.round(size * HEIGHT), color, tile[i][j], size);
        }
    }

    document.body.appendChild(canvas);
    return ctx;
}

function drawTile(ctx, x, y, w, h, color, type, size) {

    ctx.beginPath();
    ctx.fillStyle = type === 15 ? "black" : color;
    const actions = [];
    if (type === 0) {
        actions.push([0.4, 0.0, 0.2, 0.5]);
    }
    if (type === 1) {
        actions.push([0.5, 0.4, 0.5, 0.2]);
    }
    if (type === 2) {
        actions.push([0.4, 0.5, 0.2, 0.5]);
    }
    if (type === 3) {
        actions.push([0.0, 0.4, 0.5, 0.2]);
    }
    if (type === 4) {
        actions.push([0.4, 0.0, 0.2, 1.0]);
    }
    if (type === 5) {
        actions.push([0.0, 0.4, 1.0, 0.2]);
    }
    if (type === 6) {
        actions.push([0.0, 0.4, 0.6, 0.2]);
        actions.push([0.4, 0.0, 0.2, 0.6]);
    }
    if (type === 7) {
        actions.push([0.5, 0.4, 0.6, 0.2]);
        actions.push([0.4, 0.0, 0.2, 0.6]);
    }
    if (type === 8) {
        actions.push([0.5, 0.4, 0.6, 0.2]);
        actions.push([0.4, 0.4, 0.2, 0.6]);
    }
    if (type === 9) {
        actions.push([0.0, 0.4, 0.6, 0.2]);
        actions.push([0.4, 0.5, 0.2, 0.6]);
    }
    if (type === 10) {
        actions.push([0.4, 0.0, 0.2, 1.0]);
        actions.push([0.0, 0.4, 0.6, 0.2]);
    }
    if (type === 11) {
        actions.push([0.0, 0.4, 1.0, 0.2]);
        actions.push([0.4, 0.0, 0.2, 0.6]);
    }
    if (type === 12) {
        actions.push([0.4, 0.0, 0.2, 1.0]);
        actions.push([0.5, 0.4, 0.6, 0.2]);
    }
    if (type === 13) {
        actions.push([0.0, 0.4, 1.0, 0.2]);
        actions.push([0.4, 0.5, 0.2, 0.6]);
    }
    if (type === 14) {
        actions.push([0.0, 0.4, 1.0, 0.2]);
        actions.push([0.4, 0.0, 0.2, 1.0]);
    }
    if (type === 15) {
        ctx.fillRect(x * w, y * h, w, h);
    }

    if (type < 4) {
        ctx.arc(x * w + 0.5 * Math.round(size * HEIGHT), y * h + 0.5 * Math.round(size * HEIGHT), Math.round(size * HEIGHT) * 0.2, 0, Math.PI * 2, 1);
    }

    actions.forEach((values) => {
        ctx.fillRect(x * w + values[0] * Math.round(size * HEIGHT), y * h + values[1] * Math.round(size * HEIGHT), Math.round(size * HEIGHT) * values[2], Math.round(size * HEIGHT) * values[3]);
    });

    ctx.closePath();
    ctx.fill();
}

/// Better to declare before using it
function getArraysIntersection(a1, a2) {
    return a1.filter(function (n) {
        return a2.indexOf(n) !== -1;
    });
}

function processTile(size) {
    for (let i = 0; i < tile.length; i++) {
        console.log(">>> "+Math.round(HEIGHT / (size * HEIGHT)));
        tile[i] = new Array(Math.round(HEIGHT / (size * HEIGHT)));
    }
    for (let i = 0; i < tile.length; i++) {
        for (let j = 0; j < tile[i].length; j++) {
            if (i === 0 && j === 0) {
                tile[0][0] = (Math.floor(Math.random() * 16));
            } else if (i === 0) {
                // dict[tile][N S E W][tile possible]
                tile[i][j] = dict[tile[i][j - 1]][1][Math.floor(Math.random() * dict[tile[i][j - 1]][1].length)];
            } else {
                if (j === 0) {
                    tile[i][j] = dict[tile[i - 1][j]][2][Math.floor(Math.random() * dict[tile[i - 1][j]][2].length)];
                } else {
                    let top = dict[tile[i][j - 1]][1];
                    let left = dict[tile[i - 1][j]][2];
                    const between = getArraysIntersection(top, left);
                    tile[i][j] = between[Math.floor(Math.random() * between.length)];
                }
            }
        }
    }
}

document.getElementById("size").oninput = function(){
    createCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
};

document.getElementById("color").oninput = function() {
    createCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
};

document.getElementById("randomize").addEventListener("click", function () {
    createCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
}, false);


createCanvas(document.getElementById("color").value, document.getElementById("size").value/1000);
