let produtos = [];

fetch('https://sheetdb.io/api/v1/4wke752m7up1z') // seu link do SheetDB
  .then(res => res.json())
  .then(data => {
    produtos = data;
    console.log("Produtos carregados:", produtos);
  })
  .catch(err => console.error("Erro ao carregar produtos:", err));

// ordem de categorias
const ordemCategorias = [
  "Banheiros",
  "Climatização e Ventilação",
  "Cozinhas e Áreas de Serviço",
  "EPIs",
  "Telhas",
  "Ferragens",
  "Ferramentas",
  "Iluminação",
  "Impermeabilizantes",
  "Marcenaria e Madeiras",
  "Materiais de Construção",
  "Materiais Elétricos",
  "Materiais Hidráulicos",
  "Organização e Limpeza do Ambiente",
  "Pisos e Revestimentos",
  "Portas e Janelas",
  "Sistemas de Segurança e Comunicação",
  "Tintas e Acessórios"
];

function renderizarResultados(resultados, query) {
  const resultsDiv = document.getElementById('results');
  if (resultados.length > 0) {
    // agrupar produtos por categoria
    const agrupados = {};
    resultados.forEach(p => {
      if (!agrupados[p.categoria]) agrupados[p.categoria] = [];
      agrupados[p.categoria].push(p);
    });

    // ordenar categorias conforme lista
    const categoriasOrdenadas = ordemCategorias.filter(cat => agrupados[cat]);

    resultsDiv.innerHTML = `
      <div class="results-head">
        <h1>Resultados para: <span class="query-text">"${query}"</span></h1>
        <a href="#" class="link-back" onclick="limparResultados()">← Voltar à página principal</a>
      </div>
      ${categoriasOrdenadas.map(cat => `
        <h2 class="category-title">${cat}</h2>
        <div class="grid-products">
          ${agrupados[cat].map(produto => `
            <article class="product-card">
              <img src="${produto.foto}" alt="${produto.nome}" class="product-thumb">
              <div class="product-body">
                <h3 class="product-title">${produto.nome}</h3>
                <div class="product-meta">
                  <span class="obm">OBM: <strong>${produto.obm}</strong></span>
                  <a class="btn-primary small" href="${produto.link}" target="_blank" rel="noopener">Ver na Obramax</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      `).join('')}
    `;
  } else {
    resultsDiv.innerHTML = `
      <div class="no-results">
        <p>Nenhum produto encontrado para <strong>"${query}"</strong>.</p>
        <p class="muted">Tente outro termo (ex: parte do nome, marca ou medida).</p>
        <a href="#" class="btn-outline" onclick="limparResultados()">Voltar e pesquisar novamente</a>
      </div>
    `;
  }
}

function limparResultados() {
  document.getElementById('results').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('searchForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = document.querySelector('input[name="query"]').value.toLowerCase();
      if (query) {
        const resultados = produtos.filter(produto => produto.nome.toLowerCase().includes(query));
        renderizarResultados(resultados, query);
      } else {
        document.getElementById('results').innerHTML = '<p class="muted">Por favor, digite um termo de busca.</p>';
      }
    });
  }
});

