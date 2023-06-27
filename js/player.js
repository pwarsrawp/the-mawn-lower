class Player {
    constructor(gameScreen, left, top) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.element.src = "./images/mawn-lower-2.png";
      this.element.style.position = "absolute";
      this.element.style.width = `170px`;
      this.element.style.height = `100px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    move() {
      const speedMultiplier = 2;
      this.left += this.directionX * speedMultiplier;
      this.top += this.directionY * speedMultiplier;
      this.left += this.directionX;
      this.top += this.directionY;
  
      if (this.top > 530) {
        this.top = 530;
      }
  
      if (this.top < 10) {
        this.top = 10;
      }
      
      this.updatePosition();
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
  
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true;
      } else {
        return false;
      }
    }
  }