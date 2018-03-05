/* global GWindow GLabel GRect GOval GLine */

const GHEIGHT = 750;
const GWIDTH = 750;

function fractalWormhole() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let rekt = GRect(0,0,GWIDTH, GHEIGHT);
  rekt.setColor("black");
  rekt.setFilled(true);
  gw.add(rekt);
}
