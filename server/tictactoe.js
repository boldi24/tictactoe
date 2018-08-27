const X = 'X';
const O = 'O';
const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const calculateWinner = squares => {
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) return squares[a];
  }
  return null;
};

const isEnded = game => game.isEnded;

const isOccupied = (game, where) => game.squares[where] != null;

const canPlayerStep = (game, player) => game.xIsNext === player.isX;

const isAllPlaced = game => game.squares.findIndex(s => s == null) === -1;

const stepGameState = (game, where, who) => {
  if (isEnded(game) || isOccupied(game, where) || !canPlayerStep(game, who)) return null;
  const newStep = game.xIsNext ? X : O;
  const newGame = { ...game };
  const newSquares = game.squares.map((s, i) => (i !== where ? s : newStep));
  newGame.xIsNext = !game.xIsNext;
  newGame.squares = newSquares;
  const winner = calculateWinner(newSquares);
  if (winner) newGame.winner = winner;
  if (isAllPlaced(newGame) || winner) newGame.isEnded = true;
  return newGame;
};

const getInitialGameState = () => ({
  squares: new Array(9).fill(null),
  xIsNext: true,
  winner: null,
  isEnded: false
});

module.exports = {
  stepGameState,
  getInitialGameState
};
