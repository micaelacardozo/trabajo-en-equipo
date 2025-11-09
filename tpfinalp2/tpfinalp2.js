let objPri;

function setup() {
  createCanvas(640, 480);
  objPri = new Juego();
}

function draw() {
  background(220);
  objPri.mostrar();
}


function keyPressed() {
  objPri.teclaPresionada(keyCode);
}
