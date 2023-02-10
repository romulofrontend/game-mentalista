document.addEventListener("DOMContentLoaded", function(e) {
  const numeroSecreto = parseInt(Math.random() * 1001);
  console.log(`Número Secreto: ${numeroSecreto}`);

  let numeroUsuario = prompt("Digite um número de sua escolha entre 1 e 1000");

  numeroUsuario = Number(numeroUsuario);
  console.log(`Número Usuário: ${numeroUsuario} | Número Secreto: ${numeroSecreto}`);

  while (numeroUsuario < 1 || numeroUsuario > 1000) {
    numeroUsuario = prompt("🔴 Erro! Informe um número válido, entre 1 e 1000");
    numeroUsuario = Number(numeroUsuario);
    console.log(`Número Secreto: ${numeroSecreto} | Número Usuário: ${numeroUsuario}`);  
  }
  
});