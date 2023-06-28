class Rock {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = 1200;
      this.top = Math.floor(Math.random() * 600 - 20);
      this.element = document.createElement("img");
      this.element.src = "./images/rock.png";
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
  
    move1() {
      this.left -= 2;
      this.updatePosition();
    }
    move2() {
      this.left -= 3;
      this.updatePosition();
    }
    move3() {
      this.left -= 4;
      this.updatePosition();
    }
    move4() {
      this.left -= 5;
      this.updatePosition();
    }
    move5() {
      this.left -= 6;
      this.updatePosition();
    }
  }