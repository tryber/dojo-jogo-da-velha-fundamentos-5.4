let player = document.getElementById('player');

const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6], // diagonal direita esquerda
];

function hasWinner() {
  const playerSymbol = getPlayerSymbol();
  console.log(playerSymbol);
  for (const combinacao of combinacoes) {
    let result = 0;
    for (let index = 0; index < combinacao.length; index += 1) {
      const valor = combinacao[index];
      const celula = document.getElementById(valor);
      if (playerSymbol === celula.innerText) {
        result += 1;
      }
    }
    if (result === 3) {
      return true;
    }
  }
  return false;
}

function changePlayer() {
  const playerX = 'Vez do jogador X';
  const playerO = 'Vez do jogador O';
  if (player.innerText === playerO) {
    player.innerText = playerX;
  } else {
    player.innerText = playerO;
  }
}

function getPlayerSymbol() {
  if (player.innerText === 'Vez do jogador X') {
    return 'X';
  }
  return 'O';
}

function play(event) {
  const element = event.target;
  element.innerText = getPlayerSymbol();
  if (hasWinner()) {
    console.log('teste');
  } else {
    changePlayer();
  }
}

function generateDiv() {
  const grid = document.getElementsByClassName('grid')[0];
  for (let index = 0; index < 9; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('celula');
    createDiv.id = index;
    createDiv.addEventListener('click', play);
    grid.appendChild(createDiv);
  }
}

generateDiv();
