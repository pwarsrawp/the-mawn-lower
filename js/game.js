class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.gameContainer = document.getElementById("game-container");
      const inputName = document.getElementById("input-name");
      this.player = new Player(this.gameScreen, 30, 255);
      this.height = 600;
      this.width = 1200;
      this.rocks = [];
      this.moles = [];
      this.fuelcans = [];
      this.bloodstains = [];
      this.score = 0;
      this.lives = 3;
      this.fuelvalue = 10;
      this.gameIsOver = false;
      this.interval
      this.playerName = inputName.value      
    }
  
    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
      this.startScreen.style.display = "none";
      this.gameContainer.style.display = "flex";
      this.gameScreen.style.display = "block";
      this.gameLoop();
      this.interval = setInterval(() => {
        this.fuelvalue--
        document.getElementById("fuel-bar-fill").style.width = `${this.fuelvalue*10}%`;
        document.getElementById("fuel-bar-value").innerText = `${this.fuelvalue*10}%`;        
        console.log(this.fuelvalue)
      }, 3000);

    }
  
    gameLoop() {
      if (this.gameIsOver) {
        return;
      }
      this.update();
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
      this.player.move();

      //AUDIO ON/OFF MANAGEMENT
      const audioFxButton = document.getElementById("fx-button");      
      let fxOn;
      
      
      if (audioFxButton.classList.contains("audio-button-on")) {
        fxOn = true;
      }
      else {
        fxOn = false;
      }

      
      // ROCKS MANAGEMENT
      for (let i = 0; i < this.rocks.length; i++) {
        const rock = this.rocks[i];
        if(this.score < 4) {
          rock.move1()
        }
        else if (this.score >= 4 && this.score < 7) {
          rock.move2()
        }
        else if (this.score >= 7 && this.score < 10) {
          rock.move3()
        }
        else if (this.score >= 10 && this.score < 13) {
          rock.move4()
        }
        else if (this.score >= 13) {
          rock.move5()
        }
        
        if (this.player.didCollide(rock)) {
          const audioRock = new Audio('./audio/rock.mp3');
          if (fxOn) {audioRock.play()};          
          rock.element.remove();
          this.rocks.splice(i, 1);
          this.lives--;
          const threelives = '<img src="./images/heart.png" alt="heart icon"/><img src="./images/heart.png" alt="heart icon"/><img src="./images/heart.png" alt="heart icon"/>';
          const twolives = '<img src="./images/heart.png" alt="heart icon"/><img src="./images/heart.png" alt="heart icon"/>';
          const onelives = '<img src="./images/heart.png" alt="heart icon"/>';
          if (this.lives === 1) {
            document.getElementById("lives-container").innerHTML = onelives;
          }
          if (this.lives === 2) {
            document.getElementById("lives-container").innerHTML = twolives;
          }
          if (this.lives === 3) {
            document.getElementById("lives-container").innerHTML = threelives;
          }
        }
        else if (rock.left < -100) {
          rock.element.remove();
          this.rocks.splice(i, 1);
          i--;
        }
      }
      // MOLES MANAGEMENT
      for (let i = 0; i < this.moles.length; i++) {
        const mole = this.moles[i];
        mole.move();
  
        if (this.player.didCollide(mole)) {
          const audioMole = new Audio('./audio/mole.wav');
          if (fxOn) {audioMole.play()};
          mole.element.remove()
          this.moles.splice(i, 1);
          this.bloodstains.push(new Blood(this.gameScreen,this.player.left, this.player.top))
          this.score ++;
          document.getElementById("score-value").innerText = this.score;
        }
        else if (mole.left < -100) {
          mole.element.remove();
          this.moles.splice(i, 1);
          i--;
        }
      }
      // BLOODSTAIN MANAGEMENT
      for (let i = 0; i < this.bloodstains.length; i++) {
        const blood = this.bloodstains[i];
        blood.move();

        if (blood.left < -100) {
          blood.element.remove();
          this.bloodstains.splice(i, 1);
          i--;
        } 
      }
      
      

      
      // FUELCAN MANAGEMENT
      for (let i = 0; i < this.fuelcans.length; i++) {
        const fuelcan = this.fuelcans[i];
        fuelcan.move();
  
        if (this.player.didCollide(fuelcan)) {
          const audioFuel = new Audio('./audio/fuel.mp3');
          if (fxOn) {audioFuel.play()};
          fuelcan.element.remove();
          this.fuelcans.splice(i, 1);
          this.fuelvalue += 1;
          if (this.fuelvalue === 1) {
            document.getElementById("fuel-bar-fill").style.width = '10%';
            document.getElementById("fuel-bar-value").innerText = '10%';

          }
          if (this.fuelvalue === 2) {
            document.getElementById("fuel-bar-fill").style.width = '20%';
            document.getElementById("fuel-bar-value").innerText = '20%';

          }
          if (this.fuelvalue === 3) {
            document.getElementById("fuel-bar-fill").style.width = '30%';
            document.getElementById("fuel-bar-value").innerText = '30%';
          }
          if (this.fuelvalue === 4) {
            document.getElementById("fuel-bar-fill").style.width = '40%';
            document.getElementById("fuel-bar-value").innerText = '40%';
          }
          if (this.fuelvalue === 5) {
            document.getElementById("fuel-bar-fill").style.width = '50%';
            document.getElementById("fuel-bar-value").innerText = '50%';
          }
          if (this.fuelvalue === 6) {
            document.getElementById("fuel-bar-fill").style.width = '60%';
            document.getElementById("fuel-bar-value").innerText = '60%';
          }
          if (this.fuelvalue === 7) {
            document.getElementById("fuel-bar-fill").style.width = '70%';
            document.getElementById("fuel-bar-value").innerText = '70%';
          }
          if (this.fuelvalue === 8) {
            document.getElementById("fuel-bar-fill").style.width = '80%';
            document.getElementById("fuel-bar-value").innerText = '80%';
          }
          if (this.fuelvalue === 9) {
            document.getElementById("fuel-bar-fill").style.width = '90%';
            document.getElementById("fuel-bar-value").innerText = '90%';
          }
          if (this.fuelvalue === 10) {
            document.getElementById("fuel-bar-fill").style.width = '100%';
            document.getElementById("fuel-bar-value").innerText = '100%';
          }

          
        }
        else if (fuelcan.left < -100) {
          fuelcan.element.remove();
          this.fuelcans.splice(i, 1);
          i--;
        }
      }      
      
      if (this.lives === 0) {
        this.endGame();
      }

      if (this.fuelvalue === 0) {
        this.endGame();
      }

      if (this.score === 5) {
        this.endGame();

      }

      if (this.score < 4) {
        if (Math.random() > 0.98 && this.rocks.length < 1) {
          this.rocks.push(new Rock(this.gameScreen));
        }
        if (Math.random() > 0.98 && this.moles.length < 1) {
          this.moles.push(new Mole(this.gameScreen));
        }
        if (Math.random() > 0.99 && this.fuelcans.length < 1) {
          this.fuelcans.push(new FuelCan(this.gameScreen));
        }
      }
      else if (this.score >= 4 && this.score < 10) {
        if (Math.random() > 0.98 && this.rocks.length < 2) {
          this.rocks.push(new Rock(this.gameScreen));
        }
        if (Math.random() > 0.98 && this.moles.length < 1) {
          this.moles.push(new Mole(this.gameScreen));
        }
        if (Math.random() > 0.99 && this.fuelcans.length < 1) {
          this.fuelcans.push(new FuelCan(this.gameScreen));
        }
      }
      else if (this.score >= 10 && this.score < 13) {
        if (Math.random() > 0.96 && this.rocks.length < 2) {
          this.rocks.push(new Rock(this.gameScreen));
        }
        if (Math.random() > 0.98 && this.moles.length < 1) {
          this.moles.push(new Mole(this.gameScreen));
        }
        if (Math.random() > 0.99 && this.fuelcans.length < 1) {
          this.fuelcans.push(new FuelCan(this.gameScreen));
        }
      }
      else if (this.score >= 13) {
        if (Math.random() > 0.95 && this.rocks.length < 2) {
          this.rocks.push(new Rock(this.gameScreen));
        }
        if (Math.random() > 0.98 && this.moles.length < 1) {
          this.moles.push(new Mole(this.gameScreen));
        }
        if (Math.random() > 0.99 && this.fuelcans.length < 1) {
          this.fuelcans.push(new FuelCan(this.gameScreen));
        }
      }
    }
      


  
    endGame() {
      let topscore = [{name: 'Ciriaco', score: 10}, {name: 'Eustaquio', score: 3}, {name: 'Ceferino', score: 1}];
      this.player.element.remove();
      this.rocks.forEach((rock) => rock.element.remove());
      document.getElementById("lives-container").innerHTML = 0;
      document.getElementById("your-score").innerHTML = this.score;
      if (this.score === 5) {
        document.getElementById("game-end-message").innerHTML = 'Level 1 Completed';
      }
      if (this.score > topscore[0].score) {
        topscore[0].score = this.score;
        topscore[0].name = this.playerName;
      }
      if (this.score > topscore[1].score && this.score < topscore[0].score) {
        topscore[1].score = this.score;
        topscore[1].name = this.playerName;
      }
      if (this.score > topscore[2].score && this.score < topscore[1].score) {
        topscore[2].score = this.score;
        topscore[2].name = this.playerName;
      }
      document.getElementById("top1").innerHTML = `${topscore[0].name} - ${topscore[0].score}`;
      document.getElementById("top2").innerHTML = `${topscore[1].name} - ${topscore[1].score}`;
      document.getElementById("top3").innerHTML = `${topscore[2].name} - ${topscore[2].score}`;
      this.gameIsOver = true;
      clearInterval(this.interval)
  
      this.gameScreen.style.display = "none";
      this.gameContainer.style.display = "none";
      this.gameEndScreen.style.display = "flex";
    }

  }

/*
  if (Math.random() > 0.98 && this.rocks.length < 1) {
    this.rocks.push(new Rock(this.gameScreen));
  }
  if (Math.random() > 0.98 && this.moles.length < 1) {
    this.moles.push(new Mole(this.gameScreen));
  }
  if (Math.random() > 0.99 && this.fuelcans.length < 1) {
    this.fuelcans.push(new FuelCan(this.gameScreen));
  }

  */