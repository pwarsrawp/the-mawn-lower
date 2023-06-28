window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const audioButton = document.getElementById("audio-button");
  let game;
  const musicAudio = new Audio('./audio/music.wav');
  const startAudio = new Audio('./audio/mower.wav')
  

  audioButton.addEventListener("click", function () {
    musicAudio.play();
  });

  startButton.addEventListener("click", function () {
    startGame();
    startAudio.play()
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