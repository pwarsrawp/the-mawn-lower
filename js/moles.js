class Mole {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = 1200;
      this.top = Math.floor(Math.random() * 600 - 20);
      this.element = document.createElement("img");
      this.element.src = "./images/mole2.png";
      this.element.style.position = "absolute";
      this.element.style.width = `125px`;
      this.element.style.height = `100px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.gameScreen.appendChild(this.element);
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      this.left -= 2;
      this.updatePosition();
    }
  }