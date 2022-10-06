const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const TITLE_HEIGHT = 0.08*HEIGHT;
const TITLE_WIDTH = TITLE_HEIGHT;
const COLOR = "#19166b"


var tile = new Array(WIDTH);
for (var i = 0; i < tile.length; i++) {tile[i] = new Array(HEIGHT);}
for (var i = 0; i < tile.length; i++) {
    for (var j = 0; j < tile[0].length; j++) {
        tile[i][j] = (Math.floor(Math.random() * 5));
    }
}

function createCanvas(){
    let canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.backgroundColor = 'black';

    let ctx = canvas.getContext('2d');
    for(let i = 0; i < tile.length; i++){
        for(let j = 0; j < tile[0].length; j++){
            if(tile[i][j] == 0){
                drawTile(ctx, i, j, TITLE_WIDTH, TITLE_HEIGHT, COLOR, 0);
            }
            if(tile[i][j] == 1){
                drawTile(ctx, i, j, TITLE_WIDTH, TITLE_HEIGHT, COLOR, 1);
            }
            if(tile[i][j] == 2){
                drawTile(ctx, i, j, TITLE_WIDTH, TITLE_HEIGHT, COLOR, 2);
            }
            if(tile[i][j] == 3){
                drawTile(ctx, i, j, TITLE_WIDTH, TITLE_HEIGHT, COLOR, 3);
            }
            if(tile[i][j] == 4){
                drawTile(ctx, i, j, TITLE_WIDTH, TITLE_HEIGHT, COLOR, 4);
            }
        }
    }
    document.body.appendChild(canvas);
    return ctx;
}

function drawTile(ctx, x, y, w, h, color, type){
    ctx.fillStyle = color;
    ctx.beginPath();
    if(type == 0){
        ctx.arc(x*w+0.5*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_HEIGHT*0.2, 0, Math.PI*2, 1);
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.5, TITLE_HEIGHT*0.2);
    }
    if(type == 1){
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 2){
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
    }
    if(type == 3){
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 4){
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*1);
    }
    ctx.closePath();
    ctx.fill();
}

createCanvas();