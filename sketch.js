
var count = 1; 

var ground; 

function preload() {
Terrace1Image = loadImage("Images/Terrace 1 .png")
WallImage = loadImage("Images/Wall 1 .png")
}

function setup() {
createCanvas (2000, 2000);

    
 roof1= createSprite(650, 150,500,170);
 roof1.addImage("Terrace1", Terrace1Image); 

 wall1 = createSprite(676, 293,10,170);
 wall1.addImage("Wall1", WallImage); 
 wall1.scale = 1.480; 
 //roof3= createSprite(displayWidth/2, displayHeight-220,displayWidth-70,170);
 //roof4= createSprite(displayWidth/2, displayHeight-220,displayWidth-70,170);
//ground.velocityX = -2;



//player = createSprite(displayWidth/7,displayHeight-200, 40, 20);
}


function draw() {
background ("white"); 
 //console.log(ground.x); 
 //if(ground.x<560){ground.x = width/2; }


 if(keyDown("w")){
   getBigger(); 
 }

drawSprites();

}

function getBigger() {

    wall1.y = wall1.y+30; 
    roof1.y = roof1.y+30; 

wall1.scale = count+0.55; 
console.log(count); 
}