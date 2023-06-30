# The Mawn Lower

[Deployment Link](https://pwarsrawp.github.io/The-Mawn-Lower/)

## Description

The Mawn Lower is a classic style game where the goal is to run over as many moles as possible without running out of fuel or hitting rocks. The game pace will accelerate the more moles you pick making it more challenging. 

## MVP (Minimum Viable Product)

- Start, Game and End screen fully functional
- Player Mawn Lower controllable with arrows
- Obstacles to avoid
- Moles to run over
- Fuel cans to pick
- Game over condition
- Win condition
- Restart functionality

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation

## Data structure

1. **Game**: Main file controlling screens, player and object behavior and end of game.

   - Methods:
     - `start`: Starts the game with the initial settings.
     - `gameLoop`: Sets the main loop conditions.
     - `update`: Updates the game current status on every frame.
     - `didCollide`: Checks if the Mawn Lower collides with objects.
     - `endGame`: Ends the game showing the game over screen.

2. **Player**: Manages the Mawn Lower.

   - Methods:
     - `move`: To move the Mawn Lower up and down.
     - `updatePosition`: Updates the game current status on every frame.
     - `didCollide`: Checks if the Mawn Lower collides with objects.

3. **Rock**: Manages the Rock obstacles.

   - Methods:
     - `move`: Controls speed and direction of movement.
     - `updatePosition`: Updates the Rock position.

4. **Mole**: Controls the Moles behavior.

   - Methods:
     - `move`: Controls speed and direction of movement.
     - `updatePosition`: Updates the Mole position.

5. **FuelCan**: Manages the Fuel cans behavior.

   - Methods:
     - `move`: Controls speed and direction of movement.
     - `updatePosition`: Updates the Fuel cans position.

## Screens

- **Start Screen**: This is the screen shown on load. Pressing the Go! button will start the game loading the Game Screen.

- **Game Screen**: This is the main game screen where the action happens. When the game over condition is met, it will load the Game End Screen.

- **Game End Screen**: This is the screen shown when the game finishes. Pressing the Restart button will take you back to the Start screen.


- [Github Repository Link](https://github.com/pwarsrawp/the-mawn-lower)
- [Deployment Link](https://pwarsrawp.github.io/the-mawn-lower/)