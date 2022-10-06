const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let size = document.getElementById("size").value/1000;
const TITLE_HEIGHT = Math.round(size*HEIGHT);
const TITLE_WIDTH = TITLE_HEIGHT;
const COLOR = "#348ceb"

/* North South East West*/
const dict = {0:[[2,4,8,9,10,12,13,14],[1,2,3,5,8,9,13,15],[0,1,2,4,7,8,12,15],[0,2,3,4,6,9,10,15]],
            1:[[0,1,3,5,6,7,11,15],[1,2,3,5,8,9,13,15],[3,5,6,9,10,11,13,14],[0,2,3,4,6,9,10,15]],
            2:[[0,1,3,5,6,7,11,15],[0,4,6,7,10,11,12,14],[0,1,2,4,7,8,12,15],[0,2,3,4,6,9,10,15]],
            3:[[0,1,3,5,6,7,11,15],[1,2,3,5,8,9,13,15],[0,1,2,4,7,8,12,15],[1,5,7,8,11,12,13,14]],
            4:[[2,8,9,10,12,13,14],[0,6,7,10,11,12,14],[0,1,2,4,7,8,12,15],[0,2,3,4,6,9,10,15]],
            5:[[0,1,3,5,6,7,11,15],[1,2,3,5,8,9,13,15],[3,6,9,10,11,13,14],[1,7,8,11,12,13,14]],
            6:[[2,4,8,9,10,12,13,14],[1,2,3,5,8,9,13,15],[0,1,2,4,7,8,12,15],[1,5,7,8,11,12,13,14]],
            7:[[2,4,8,9,10,12,13,14],[1,2,3,5,8,9,13,15],[3,5,6,9,10,11,13,14],[0,2,3,4,6,9,10,15]],
            8:[[0,1,3,5,6,7,13,15],[0,4,6,7,10,11,12,14],[3,5,6,9,10,11,13,14],[0,2,3,4,6,9,10,15]],
            9:[[0,1,3,5,6,7,11,15],[0,4,6,7,10,11,12,14],[0,1,2,4,7,8,12,15],[1,5,7,8,11,12,13,14]],
            10:[[2,4,8,9,10,12,13,14],[0,4,6,7,10,11,12,14],[0,1,2,4,7,8,12,15],[1,5,7,8,11,12,13,14]],
            11:[[2,4,8,9,10,12,13,14],[1,2,3,5,8,9,13,15],[3,5,6,9,10,11,13,14],[1,5,7,8,11,12,13,14]],
            12:[[2,4,8,9,10,12,13,14],[0,4,6,7,10,11,12,14],[3,5,6,9,10,11,13,14],[0,2,3,4,6,9,10,15]],
            13:[[0,1,3,5,6,7,11,15],[0,4,6,7,10,11,12,14],[3,5,6,9,10,11,13,14],[1,5,7,8,11,12,13,14]],
            14:[[2,4,8,9,10,12,13,14],[0,4,6,7,10,11,12,14],[3,5,6,9,10,11,13,14],[1,5,7,8,11,12,13,14]],
            15:[[0,1,3,5,6,7,11,15],[1,2,3,5,8,9,13,15],[0,1,2,4,7,8,12,15],[0,2,34,6,9,10,15]]
        };

var tile = new Array(Math.round(WIDTH/TITLE_WIDTH));



function createCanvas(){
    let canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.backgroundColor = 'black';

    let ctx = canvas.getContext('2d');

    processTile();
    for(let i = 0; i < tile.length; i++){
        for(let j = 0; j < tile[0].length; j++){
            drawTile(ctx, i, j, TITLE_WIDTH, TITLE_HEIGHT, document.getElementById("color").value, tile[i][j]);
        }
    }
    document.body.appendChild(canvas);
    return ctx;
}

function drawTile(ctx, x, y, w, h, color, type){

    ctx.beginPath();
    if(type == 0){
        ctx.fillStyle = color;
        ctx.arc(x*w+0.5*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_HEIGHT*0.2, 0, Math.PI*2, 1);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.5);
    }
    if(type == 1){
        ctx.fillStyle = color;
        ctx.arc(x*w+0.5*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_HEIGHT*0.2, 0, Math.PI*2, 1);
        ctx.fillRect(x*w+0.5*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.5, TITLE_HEIGHT*0.2);
    }
    if(type == 2){
        ctx.fillStyle = color;
        ctx.arc(x*w+0.5*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_HEIGHT*0.2, 0, Math.PI*2, 1);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.5);
    }
    if(type == 3){
        ctx.fillStyle = color;
        ctx.arc(x*w+0.5*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_HEIGHT*0.2, 0, Math.PI*2, 1);
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.5, TITLE_HEIGHT*0.2);
    }
    if(type == 4){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*1);
    }
    if(type == 5){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
    }
    if(type == 6){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 7){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0.5*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 8){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0.5*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 9){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 10){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*1);
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
    }
    if(type == 11){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 12){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*1);
        ctx.fillRect(x*w+0.5*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*0.6, TITLE_HEIGHT*0.2);
    }
    if(type == 13){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0.5*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*0.6);
    }
    if(type == 14){
        ctx.fillStyle = color;
        ctx.fillRect(x*w+0*TITLE_WIDTH, y*h+0.4*TITLE_HEIGHT, TITLE_WIDTH*1, TITLE_HEIGHT*0.2);
        ctx.fillRect(x*w+0.4*TITLE_WIDTH, y*h+0*TITLE_HEIGHT, TITLE_WIDTH*0.2, TITLE_HEIGHT*1);
    }
    if(type == 15){
        ctx.fillStyle = "black";
        ctx.fillRect(x*w, y*h, w, h);
    }
    ctx.closePath();
    ctx.fill();
}

function processTile(){
    for (var i = 0; i < tile.length; i++) {
        tile[i] = new Array(Math.round(HEIGHT/TITLE_HEIGHT));
    }
    for (var i = 0; i < tile.length; i++) {
        for (var j = 0; j < tile[i].length; j++) {
            if(i == 0 && j == 0){
                tile[0][0] = (Math.floor(Math.random() * 16));
            }
            else if(i==0){
                // dict[tile][N S E W][tile possible]
                tile[i][j] = dict[tile[i][j-1]][1][Math.floor(Math.random() * dict[tile[i][j-1]][1].length)];
            }
            else{
                if(j==0){
                    tile[i][j] = dict[tile[i-1][j]][2][Math.floor(Math.random() * dict[tile[i-1][j]][2].length)];
                }
                else{
                    let top = dict[tile[i][j-1]][1];
                    let left = dict[tile[i-1][j]][2];
                    var beetween=getArraysIntersection(top, left);
                    let random = beetween[Math.floor(Math.random() * beetween.length)];
                    tile[i][j] = random;
                }
            }
        }
    }
}

function getArraysIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}

document.getElementById("size").addEventListener("change", function(){
    location.reload();
});

document.getElementById("color").addEventListener("change", function(){
    location.reload();
}, false);

document.getElementById("randomize").addEventListener("click", function(){
    location.reload();
}, false);


createCanvas();