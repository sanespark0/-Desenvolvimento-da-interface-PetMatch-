// ============================================
// PETMATCH — RENDERIZAÇÃO E INTERATIVIDADE
// ============================================

// 1. Capturando os containers vazios
const containerCarrossel = document.getElementById('carrossel-recentes');
const containerLista = document.getElementById('lista-adicionados');

// 2. Função que cria o HTML de um Card (Carrossel horizontal)
function criarCardHTML(pet) {
  return `
    <article class="card-pet">
      <div class="card-img-wrapper">
        <img src="${pet.img}" alt="${pet.nome}">
        <span class="badge-genero">${pet.genero || 'Adotar'}</span>
        <button class="btn-favorito">🤍</button>
      </div>
      <div class="card-info">
        <h3>${pet.nome}</h3>
        <p>${pet.raca} • ${pet.idade}</p>
        <div class="card-local">
          <span>📍</span>
          <span>${pet.distancia || pet.cidade}</span>
        </div>
      </div>
    </article>
  `;
}

// 3. Função que cria o HTML de um Item de Lista (Adicionados recentemente)
function criarItemListaHTML(pet) {
  return `
    <article class="item-recente">
      <img src="${pet.img}" alt="${pet.nome}">
      <div class="item-info">
        <h3>${pet.nome}</h3>
        <p>${pet.raca}</p>
        <div class="card-local">
          <span>📍</span>
          <span>${pet.cidade}</span>
        </div>
      </div>
      <div class="item-right">
        <span class="badge-idade">${pet.idade}</span>
        <button class="btn-favorito-lista">🤍</button>
      </div>
    </article>
  `;
}

// 4. Renderizando os dados na tela
function renderizarPagina() {
  // Renderiza o carrossel
  if (dadosPets.recentes && dadosPets.recentes.length > 0) {
    containerCarrossel.innerHTML = dadosPets.recentes.map(criarCardHTML).join('');
  }

  // Renderiza a lista
  if (dadosPets.adicionados && dadosPets.adicionados.length > 0) {
    containerLista.innerHTML = dadosPets.adicionados.map(criarItemListaHTML).join('');
  }
}

// 5. Lógica dos Filtros e Favoritos
function ativarInteratividade() {
  // Filtros de categoria
  const categorias = document.querySelectorAll('.categoria');
  categorias.forEach(cat => {
    cat.addEventListener('click', () => {
      categorias.forEach(c => c.classList.remove('ativo'));
      cat.classList.add('ativo');
      // Aqui você poderia filtrar os pets de verdade no futuro
    });
  });

  // Botões de Favorito (Delegação de eventos, pois os botões são criados depois)
  document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-favorito, .btn-favorito-lista')) {
      const btn = e.target;
      btn.textContent = btn.textContent.trim() === '🤍' ? '❤️' : '🤍';
    }
  });
}

// 6. Inicialização
renderizarPagina();
ativarInteratividade();
//*Optei por renderizar os cards dinamicamente via JavaScript para melhor escalabilidade do código, populando a tela a partir de um arquivo de dados*//
// ===== BUSCA EM TEMPO REAL =====
const inputBusca = document.querySelector('.busca');

inputBusca.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase();
  
  // Pega todos os cards e itens da lista
  const cards = document.querySelectorAll('.card-pet');
  const itens = document.querySelectorAll('.item-recente');

  // Filtra os cards
  cards.forEach(card => {
    const nome = card.querySelector('h3').textContent.toLowerCase();
    if (nome.includes(termo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Filtra a lista de recentes
  itens.forEach(item => {
    const nome = item.querySelector('h3').textContent.toLowerCase();
    if (nome.includes(termo)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});
// ===== PERSONALIZAÇÃO DE BOAS-VINDAS =====
const nomeSalvo = localStorage.getItem('petmatch_usuario');
if (nomeSalvo) {
  // Deixa a primeira letra maiúscula
  const nomeFormatado = nomeSalvo.charAt(0).toUpperCase() + nomeSalvo.slice(1);
  document.getElementById('titulo-boas-vindas').textContent = `Bem-vindo de volta, ${nomeFormatado}! 👋`;
}