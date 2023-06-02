function executarJogo(){
    //imprime à tela as informações guardas nas variáveis
  background(fundo);
  jogador.mova();
  itens01[0].mova();
  for (let i = 0; i < itens01.length; i++) {
    itens01[i].mova();
    if (itens01[i].posY > 400) {
      itens01[i] = new Itens(itens01[i].posY);
    }

    //if = a condição necessária para que quaando o jogador tocar no objeto o mesmo marque ponto
    if (
      jogador.xInicial < itens01[i].xFinal &&
      jogador.xFinal > itens01[i].xInicial &&
      jogador.yInicial < itens01[i].yFinal &&
      jogador.yFinal > itens01[i].yInicial
    ) {
      coin.play(); //insere o som
      if (itens01[i].imagem == itens[4]) {
        itens01[i] = new Itens(itens01[i].posY);
        pontos = 0;
        vidas--;
        som.play(); //insere o som
      } else {
        itens01[i] = new Itens(itens01[i].posY);
        pontos++;
      }

      itens01[i] = new Itens(itens01[i].posY);
    }

    //texto da pontuação
    text("Pontos = " + pontos, 10, 20);
  }
}