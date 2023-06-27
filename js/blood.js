class Blood {
    constructor(gameScreen, left, top) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.element = document.createElement("img");
      this.element.src = "./images/blood.png";
      this.element.style.position = "absolute";
      this.element.style.width = `100px`;
      this.element.style.height = `75px`;
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