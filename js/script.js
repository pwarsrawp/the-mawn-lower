window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const audioMusicButton = document.getElementById("music-button");
  const audioFxButton = document.getElementById("fx-button");
  let game;
  const musicAudio = new Audio('./audio/music.wav');

  const nameInputScreen = document.getElementById("input-popup");
  const nameInputOkButton = document.getElementById("input-ok-button");
  const nameInputBackButton = document.getElementById("input-back-button");
  const inputName = document.getElementById("input-name");
  let playerName = "";
  let musicOn = true;
  let fxOn = true;

  
  

  // MUSIC ON/OFF
  audioMusicButton.addEventListener("click", function () {
    if (audioMusicButton.classList.contains("audio-button-on")) {
      audioMusicButton.classList.remove("audio-button-on");
      musicOn = false;
    }
    else {
      audioMusicButton.classList.add("audio-button-on");
      musicOn = true;
    }
    
  });

  
  // SOUND FX ON/OFF
  audioFxButton.addEventListener("click", function () {
    if (audioFxButton.classList.contains("audio-button-on")) {
      audioFxButton.classList.remove("audio-button-on");
      fxOn = false;
    }
    else {
      audioFxButton.classList.add("audio-button-on");
      fxOn = true;
    }
    
  });

  
  
  
  
  startButton.addEventListener("click", function () {
    nameInputScreen.style.display = "block";
  });

  nameInputOkButton.addEventListener("click", function () {
    if (musicOn) {
      startGame();
      musicAudio.play();
    }
    else {
      startGame();
    }
    playerName = inputName.value;
  });

  nameInputBackButton.addEventListener("click", function () {
    nameInputScreen.style.display = "none";
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowUp", "ArrowDown",];

    if (possibleKeystrokes.includes(key)) {
      switch (key) {
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowUp", "ArrowDown",];

    if (possibleKeystrokes.includes(key)) {
      switch (key) {
        case "ArrowUp":
          game.player.directionY = 0;
          break;
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }
    }
  }
  

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};