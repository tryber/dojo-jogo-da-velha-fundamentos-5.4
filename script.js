const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

const grid = document.querySelector('.grid');
const player = document.querySelector('#player');

let turno = true;
// se turno eh true então jogador 'X'
// caso contrário 'O'

function jogar(event) {
  const clicado = event.target;
  let jogador; // X ou O
  
  if(turno) { // 'X'       turno === true
    jogador = 'X';
  } else { // 'O'
    jogador = 'O';
  }

  player.innerText = 'Jogador da vez ' + jogador;
  clicado.innerText = jogador;
  turno = !turno;
}

function checarGanhou(jogador) {
  // for of itera sobre os valores
  // for in itera sobre os indices
  for (let combinacao of combinacoes) {
    console.log(combinacao);
  }
}

checarGanhou('X');

// gere 9 divs e as adicione na div grid
function gerarDivs() {
  for (let index = 0; index < 9; index += 1) {
    // iterar/funcionar para cada div
    const div = document.createElement('div');
    div.className = 'celula';
    div.id = index;
    div.addEventListener('click', jogar);
    grid.appendChild(div);
  }
}

gerarDivs();

