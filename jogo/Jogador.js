class Jogador {
    //classe utilizada para definir a velocidade, posição e o tamanho do jogador que se movimentará horizontalmente
    constructor() {
      this.imagem = loadImage("jogo/img_jogo/mariosprite.png");
      this.posY = 300;
      this.posX = 300;
      this.velocidade = 5 + pontos;
      this.largura = 35;
      this.altura = 55;
    }
  
    mova() {
      //movimentação através da setas
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
  
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
      //posição do obejto
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
    }
  }