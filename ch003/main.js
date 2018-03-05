/* global GWindow GLabel GRect GOval GLine */
/* local graphicsHelloWorld, blueRectangle, drawDiagonals */

const GWIDTH = 500;
const GHEIGHT = 200;
const RAINBOWRAD = 280;

function helloWorld() {
  return "Hello, world!";
}

function graphicsHelloWorld() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel(helloWorld(), 150, 214);
  msg.setFont("36px 'Comic Sans MS'");
  msg.setColor("fireBrick");
  gw.add(msg);
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let rekt = GRect(150, 50, 200, 100);
  rekt.setColor("cornflowerBlue");
  rekt.setFilled(true);
  gw.add(rekt);

  let oval = GOval(150, 50, 200, 100);
  oval.setColor("orange");
  oval.setFilled(true);
  gw.add(oval);

  let msg = GLabel("GET REKT BLUE RECTANGLE", 200, 100);
  gw.add(msg);
}

function drawDiagonals() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  gw.add(GLine(0,0,GWIDTH,GHEIGHT));
  gw.add(GLine(0,GHEIGHT,GWIDTH, 0));
}

function createFilledCircle(x, y, r, color) {
  let circle = GOval(x-r, y-r, 2*r, 2*r);
  circle.setColor(color);
  circle.setFilled(true);
  return circle;
}

function drawTarget() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH/2;
  let yc = GHEIGHT/2;
  gw.add(createFilledCircle(xc, yc, 250, "red"));
  gw.add(createFilledCircle(xc, yc, 188, "white"));
  gw.add(createFilledCircle(xc, yc, 125, "red"));
}

function drawRainbow() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let skyRekt = GRect(GWIDTH, GHEIGHT);
  let xc = GWIDTH/2;
  let yc = GHEIGHT+240;
  skyRekt.setColor("cyan");
  skyRekt.setFilled(true);
  gw.add(skyRekt);
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+140, "red"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+130, "orange"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+120, "yellow"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+110, "green"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+100, "blue"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+90, "purple"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+80, "indigo"));
  gw.add(createFilledCircle(xc, yc, RAINBOWRAD+70, "cyan"));
}

function drawTicTacToe() {
  let gw = GWindow(GWIDTH + 102, GHEIGHT + 402);
  gw.add(GLine(201,10,201,592));
  gw.add(GLine(402,10,402,592));
  gw.add(GLine(10,201,592,201));
  gw.add(GLine(10,402,592,402));
}
