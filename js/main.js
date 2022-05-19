import Game from "./Game.js";
import GameView from "./GameView.js";

let gameView = new GameView();
let game = new Game();

let tiles = document.querySelectorAll(".board-tile");
let restart = document
  .querySelector(".restart")
  .addEventListener("click", () => {
    onRestartClick();
  });

tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);

  //show view
  gameView.updateBoard(game);
}

function onRestartClick() {
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
