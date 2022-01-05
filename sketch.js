const barWidth = 10;
let lastBar = -100;

function setup() {
  createCanvas(500, 500);
  colorMode(RGB, width, height, 50);
  noStroke();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    //Add the code to fill the bars with color
    fill(barX,mouseY,10);
    
    
    ellipse(barX, -10, barWidth, height);
    lastBar = whichBar;
  }
}
