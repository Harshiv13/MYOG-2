var player;
var spike, gaps, i;
var border;
var particles, particlesGroup;

function preload() {
}

function setup() {
  var canvas = createCanvas(1260, 600);

  particlesGroup = new Group();

  player = createSprite(200, 525, 50, 50);
  player.shapeColor = "#107ab0";
  player.setCollider("rectangle", 0, 0, 50, 50)

  border1 = createSprite(630, 25, 1260, 50);
  border2 = createSprite(630, 625, 1260, 150);

  spike = createSprite(Math.round(random(1300, 1600)), 62.5, 25, 25);
  spike.shapeColor = "#ED2939";
  spike.velocityX = - 25;
  
  gaps = createSprite(Math.round(random(1300, 1600)), 575, 100, 50);
  gaps.shapeColor = 100;
  gaps.velocityX = - 25;
}

function draw() { 
  background(100);

  player.depth = player.depth + 1;
  spike.depth = spike.depth + 1;
  gaps.depth = gaps.depth + 1;

  border1.y = 25;
  border2.y = 625;

  if(spike.x < -50){
    spike.x = Math.round(random(1300, 1600));
    i = Math.round(random(1,2));
    i=i;
    switch(i){
      case 1: spike.y = 62.5
        break;
      case 2: spike.y = 537.5
        break;
      default:break;
    }
  }
  
  if(gaps.x < -50){
    gaps.x = Math.round(random(1300, 1600));
    switch(i){
      case 1: gaps.y = 575
        break;
      case 2: gaps.y = 25
        break;
      default:break;
    }
  }

  if(keyWentDown("SPACE") && player.position.y == 525){
    player.velocityY = -30;
  }

  if(keyWentDown("SPACE") && player.position.y == 75){
    player.velocityY = 30;
  }

  if(player.velocityY != 0){
    player.width = 60;
    player.height = 40;
  }

  if(player.velocityY == 0){
    player.width = 50;
    player.height = 50;
  }

  player.collide(border1);
  player.collide(border2);

  if(frameCount%10 == 0){
  spawnParticles();
  }

  drawSprites();
}

function spawnParticles(){
  particles = createSprite(1300,Math.round(random(65, 540)),200,10);
  particles.shapeColor = 105;
  particlesGroup.add(particles);
  particlesGroup.setVelocityXEach(-15);
  particlesGroup.setLifetimeEach(100);
}