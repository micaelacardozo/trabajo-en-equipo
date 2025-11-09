class Juego {
  constructor() {
    this.cantidadCajas = 12;
    this.cajas = [];
    for (let i = 0; i < this.cantidadCajas; i++) {
      this.cajas[i] = new Caja(random(10, width - 10), -i * 50);
    }

 
    this.escenarios = new Escenarios();
    
    this.margot = new Margot(this.escenarios.piso1.y);
  }

  mostrar() {
  
    this.escenarios.mostrar();

 
    for (let i = 0; i < this.cajas.length; i++) {
      this.cajas[i].mover();
      this.cajas[i].mostrar();
    }

    
    this.chocar();

    this.margot.mostrar();
  }

  chocar() {
    for (let i = 0; i < this.cajas.length; i++) {
      if (this.margot.x < this.cajas[i].x + this.cajas[i].w &&
          this.margot.x + this.margot.w > this.cajas[i].x &&
          this.margot.y < this.cajas[i].y + this.cajas[i].h &&
          this.margot.y + this.margot.h > this.cajas[i].y) {
        this.cajas[i].y = -this.cajas[i].h;
        this.cajas[i].x = random(10, width - 10);
        this.margot.vida.perder();
      }
    }
  }

  teclaPresionada(keyCode){
  this.margot.teclaPresionada(keyCode); 
 }
}
