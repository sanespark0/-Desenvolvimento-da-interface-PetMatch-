document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault(); 

  const email = document.getElementById('email').value;
  const botao = e.target.querySelector('.btn-primary');

  // Efeito de carregamento
  botao.textContent = 'Entrando...';
  botao.style.opacity = '0.7';

  setTimeout(() => {
    // Pega o nome antes do @ para personalizar a Home
    const nomeUsuario = email.split('@')[0];
    localStorage.setItem('petmatch_usuario', nomeUsuario);

    botao.textContent = 'Sucesso! ✓';
    botao.style.backgroundColor = '#4CAF50';

    setTimeout(() => {
      window.location.href = 'petmatch.html';
    }, 1000);
  }, 1000);
});