  let numeroTentativas = 1;
  const numeroSecreto = parseInt(Math.random() * 1001);
  console.log(`Número Secreto: ${numeroSecreto}`);
  
  let numeroUsuario = prompt("😎 Digite um número de sua escolha, entre 1 e 1000");
  
  numeroUsuario = Number(numeroUsuario);
  console.log(`Número Usuário: ${numeroUsuario} | Número Secreto: ${numeroSecreto}`);
  
  while (numeroUsuario < 1 || numeroUsuario > 1000) {
    numeroUsuario = prompt("🔴 Erro! Digite um número válido, entre 1 e 1000");
    numeroUsuario = Number(numeroUsuario);
    console.log(`Número Secreto: ${numeroSecreto} | Número Usuário: ${numeroUsuario}`);  
  }
  
  while(numeroUsuario != numeroSecreto) {
    if (numeroUsuario > numeroSecreto){      
      alert(`🤣 VOCÊ ERROU! \n🔽 O Número Secreto é MENOR que ${numeroUsuario}!`)
    } else {
      alert(`🤣 VOCÊ ERROU! \n🔼 O Número Secreto é MAIOR que ${numeroUsuario}!`);
    }

    if(numeroTentativas > 1){
      alert(`🙄 Você fez ${numeroTentativas} tentativas. \n😎 Clique em OK para tentar novamente.`);
    } else{
      alert(`🙄 Você fez ${numeroTentativas} tentativa. \n😎 Clique em OK para tentar novamente.`);
    }

    numeroUsuario = prompt("😎 Digite outro número entre 1 e 1000");

    while (numeroUsuario < 1 || numeroUsuario > 1000) {
      numeroUsuario = prompt("🔴 Erro! Digite um número válido, entre 1 e 1000");        
    }

    numeroUsuario = Number(numeroUsuario);
    numeroTentativas++;
    }

    alert(`VOCÊ ACERTOU! 🏆 \n${numeroUsuario} é o Número Secreto!🎉`);
    alert(`JOGO ENCERRADO!!!`);