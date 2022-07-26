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
  let outroJogador;
  
  if(turno) { // 'X'       turno === true
    jogador = 'X';
    outroJogador = 'O';
  } else { // 'O'
    jogador = 'O';
    outroJogador = 'X'
  }

  // a celula esta em branco
  if (clicado.innerText === ''){
    player.innerText = 'Jogador da vez ' + outroJogador;
    clicado.innerText = jogador;
    turno = !turno;
    checarGanhou(jogador);
  }
}

// retornar true se o jogador ganhou naquela combinacao
// retornar false caso contrario.
function ganhou(jogador, combinacao) {
  let pontuacao = 0;
  for (let posicaoIndice in combinacao) {
    // se eu tenho o indice
    // acesso o valor atraves do array[indice]
      const indiceCelula = combinacao[posicaoIndice];
      const celula = document.getElementById(indiceCelula);
      // se o jogador eh igual ao conteudo da celula
      if (celula.innerText === jogador) {
        pontuacao += 1;
      }
  }

  if (pontuacao === 3) {
    return true;
  } else {
    // quando seu codigo encontrar return
    // ele interrompe a execucao da funcao
    return false;
  }
}

function checarGanhou(jogador) {
  // for of itera sobre os valores
  // for in itera sobre os indices
  for (let combinacao of combinacoes) {
    // com uma combinacao vou verificar se jogador
    // ganhou naquela combinacao
    if (ganhou(jogador, combinacao) === true) {
      player.innerText = jogador + ' venceu!!!';
    }
  }
}

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

const reset = document.getElementById('reset')
reset.addEventListener('click', function(event) {
  const celulas = document.querySelectorAll('.celula');
  for (const celula of celulas) {
    celula.innerText = '';
  }
});

