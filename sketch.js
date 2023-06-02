//variáveis para armazenar informações
let fundo;
let jogador;
let itens = [];
let itens01 = [];
let pontos = 0;
let som;
let bomb;
let coin;
let telaAbertura;
let imgdeFundo;
let ctrlTela = "INICIO";
let Gameover;
let vidas = 3;
let coracao;





function setup() {
  //define o tamanho da tela do jogo
  createCanvas(600, 400).parent("jogo");
}

function preload() {
  //guarda as informações em variáveis
  fundo = loadImage("jogo/img_jogo/fundomario.jpg");
  jogador = loadImage("jogo/img_jogo/mariosprite.png");
  itens[0] = loadImage("jogo/img_jogo/moeda.png");
  itens[1] = loadImage("jogo/img_jogo/cabecudo.png");
  itens[2] = loadImage("jogo/img_jogo/estrela.png");
  itens[3] = loadImage("jogo/img_jogo/inimigo.png");
  itens[4] = loadImage("jogo/img_jogo/bomba.png");
  jogador = new Jogador();
  itens01[0] = new Itens();
  itens01[1] = new Itens();
  itens01[2] = new Itens();
  itens01[3] = new Itens();
  itens01[4] = new Itens();
  som = loadSound("audio/bomb.mp3");
  coin = loadSound("audio/coin.mp3");
  telaAbertura = loadImage("img_site/inicio.gif");
  imgFundo = loadImage("img_site/fundao.jpg");
  Gameover = loadImage("img_site/final.gif")
  coracao = loadImage("jogo/img_jogo/coracao.png")
}

function draw() {
  if(ctrlTela == ("INICIO")){
    mostrarAbertura();
  } if(ctrlTela == ("JOGO")){
      executarJogo();
    } if(vidas == 0){
        mostrarGameover();
      } if(keyIsDown(13)){
          ctrlTela = ("JOGO")
        }
} 
     


