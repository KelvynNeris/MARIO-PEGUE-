class Itens {
    //classe utilizada para definir a velocidade, posição e o tamanho dos itens que se movimentarão verticalmente
    constructor() {
      this.imagem = itens[int(random(0, 4.9))];
      this.posX = random(10, 550);
      this.posY = 0;
      this.velocidade = random(1, 2 + pontos);
      this.largura = 45;
      this.altura = 45;
    }
    mova() {
      //movimentação dos itens verticalmente
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }