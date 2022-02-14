const grade = document.querySelector('.grid');
const jogador = document.getElementById('player'); 
const btnResetar = document.getElementById('reset'); 

let checarTurno = true; //variavel para alternar turno
const jogador_x = 'X'; 
const jogador_o = 'O';

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

//Função que gera as celulas com classe e id fixando-as na grid
function gerarCelulas(){
  for (let i = 0; i < 9; i+=) {
    let celula = document.createElement('div');
    celula.className = 'celula';
    celula.id = i;
    celula.addEventListener('click', jogar);
    grade.appendChild(celula);
  }
}
gerarCelulas();
const celulas = document.querySelectorAll('.celula');

//função para alternar entre os jogadores e adicionar o X/O na celula
function jogar(e){
  const celula = document.getElementById(e.target.id);
  let turno = '';

  if(checarTurno){
    turno = jogador_x;
    jogador.innerText = 'Vez do jogador O';
  } else{
    turno = jogador_o;
    jogador.innerText = 'Vez do jogador X';
  }
  
  celula.innerText = turno;
  checarTurno = !checarTurno;
  checarVencedor(turno);
  
}

//função que roda todas as combinações testando se o jogador X ou O ganhou
function checarVencedor(turno){
  let pontos = 0;
  let posicoes = [];

  for (let i = 0; i < combinacoes.length; i++) {
    posicoes = combinacoes[i];
    pontos = 0;

    for (let l = 0; l < posicoes.length; l++) {
      if(document.getElementById(posicoes[l]).innerText == turno){
        pontos += 1;
        if(pontos >= 3){
          jogador.innerHTML = turno + ' Ganhou !!!';
        }
        else{
          ChecarEmpate();
        }
      }
    }
  }
}

//fução para verificar se todas as celulas estão ocupadas, se caso for verdade o jogo deu empate
function ChecarEmpate(){
  let count = 0;
  for (let i = 0; i < celulas.length; i++) {
    if(celulas[i].innerText != ''){
      count += 1;
      if (count >= celulas.length) {
        jogador.innerHTML = 'EMPATOU!!';
      }
    }
  }
}

//função para resetar o jogo da velha
function resetar(){
    for (const i of celulas) {
      i.innerText = '';
    }
}

btnResetar.addEventListener('click', resetar);
