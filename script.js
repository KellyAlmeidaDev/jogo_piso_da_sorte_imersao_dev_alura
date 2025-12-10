function jogar(){
  rodada = 1;
  while (rodada <= 5) {
    escolhaJogador = prompt(`Nível ${rodada}, escolha uma opção de 1 à 5`);
    if (escolhaJogador < 1 || escolhaJogador > 5 || isNaN(escolhaJogador)){
      alert('Escolha um número válido');
      continue;
    }
    pisoQuebrado = Math.ceil(Math.random()*5);
    if (escolhaJogador == pisoQuebrado){
      alert('Quebrou o piso!!');
      rodada += 5;
    } else if (escolhaJogador != pisoQuebrado) {
      alert(`Terra firme! O quebrado estava na ${pisoQuebrado}° opção`)
    } 
    rodada += 1
  }
  if (rodada == 6){
    alert('Parabéns!! Você venceu!!')
  }
}