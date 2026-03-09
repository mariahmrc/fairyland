var power=0;


function setup(){
  createCanvas(500, 500); //create a 500px X 500px canvas
  // magical island background
background(20,40,120); // efface l'écran a chaque fois
}

//The draw function happens over and over again
function draw() {
  
  if(mouseY < height/2){
  
  // DAY / NIGHT following mouse
  background(135,200,255,40); // blue sky 
  fill(255,210,120);
  ellipse(420,80,80,80); // sun
  
  fill(0,170,220); // light blue
  rect(0,350,width,150);
  
} else { 

  // night
  background(20,40,120,40); // night sky
  fill(240,240,200);
  ellipse(420,80,80,80); // moon 
  
  fill(0,120,200); //water 
  rect(0,350,width,150);
  
   // stars
  stroke(255);
  strokeWeight(3);
  point(random(0,500),random(0,500));
  }
  
  // island
  fill(230,210,140);
  ellipse(250,360,320,120);
  
  // mountains
  fill(120,140,90);
  triangle(200,330,250,240,300,330);
  
  triangle(260,330,310,260,360,330);
  
   // text 
  stroke(150,200,255);
  strokeWeight(3);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("Invisible power", 250, 450);
  noStroke();
  
  // wings 
  stroke(150,100,255);
  strokeWeight(2);
  fill(200,150,255,200-power);
  ellipse(mouseX-30,mouseY,40,60);
  ellipse(mouseX+30,mouseY,40,60);

  // fairy body 
  fill(255,220,200,255-power);
  stroke(255,200,180);
  ellipse(mouseX,mouseY,50,50);
  
  // eyes 
  fill(0,255,100,255-power);
  ellipse(mouseX-10,mouseY-5,8,8);
  ellipse(mouseX+10,mouseY-5,8,8);

  // flower crown 
  fill(255,100,150,255-power);
  triangle(mouseX-10,mouseY-20, mouseX-5,mouseY-30, mouseX,mouseY-20);
  triangle(mouseX,mouseY-20, mouseX+5, mouseY-30, mouseX+10, mouseY-20);

  // magic aura
  noStroke();
  fill(150,200,255,power);
  ellipse(mouseX,mouseY,120,120);
}

// click to activate invisibility power 
function mousePressed(){

  if (power >=200) {
    power = 0;
  } else {
    power = power + 50;
  
  }
}