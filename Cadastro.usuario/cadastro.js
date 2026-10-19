// ============================================
// CONTROLE DE ETAPAS DO CADASTRO
// ============================================

function proximaEtapa(numeroEtapa) {
  // Pega todas as etapas
  const etapas = document.querySelectorAll('.etapa');
  
  // Remove a classe ativa de todas
  etapas.forEach(etapa => etapa.classList.remove('ativa'));
  
  // Adiciona a classe ativa na etapa correta
  document.getElementById(`etapa-${numeroEtapa}`).classList.add('ativa');
}

function voltarEtapa(numeroEtapa) {
  proximaEtapa(numeroEtapa);
}

// Quando o formulário for enviado (na Etapa 2)
document.getElementById('form-cadastro').addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recarregar a página
  
  // Aqui você pode pegar os valores e simular o cadastro
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const objetivo = document.querySelector('input[name="objetivo"]:checked').value;
  
  // Feedback pro usuário
  const botao = e.target.querySelector('.btn-primary');
  botao.textContent = 'Criando conta...';
  botao.style.backgroundColor = '#4CAF50'; // Verde
  
  setTimeout(() => {
    alert(`Bem-vindo(a), ${nome}! Conta criada com sucesso.`);
    // window.location.href = 'petmatch.html'; // Redireciona para a home
  }, 1000);
});