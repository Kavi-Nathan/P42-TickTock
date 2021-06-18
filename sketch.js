function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  drawSprites();
  translate(250,300);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(13);
  noFill();

  stroke(140, 0, 252);
  let h1 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 275, 275, 0, h1);

  stroke(1, 254, 1);
  let h2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 315, 315, 0, h2);

  stroke(53, 0, 255);
  let h3 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 350, 350, 0, h3);

  strokeWeight(5);

  push();
  stroke(140, 0, 252);
  rotate(h1);
  line(0,0,70,0);
  pop();

  push();
  stroke(1, 254, 1);
  rotate(h2);
  line(0,0,85,0);
  pop();

  push();
  stroke(53, 0, 255);
  rotate(h3);
  line(0,0,100,0);
  pop();

  //rotate(90);
  textSize(100);
  fill("white");
  noStroke();
  textStyle(BOLD);
  text (hr + ":" + mn + ":"+ sc, -200, 420);
  //ellipse(-300, 0, 100,100);

}