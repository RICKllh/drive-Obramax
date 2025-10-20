// Array de produtos 
 produtos = [];

fetch('https://sheetdb.io/api/v1/4wke752m7up1z')
  .then(res => res.json())
  .then(data => {
    produtos = data;
    console.log("Produtos carregados:", produtos);
  })
  .catch(err => console.error("Erro ao carregar produtos:", err));


// Função para renderizar resultados
function renderizarResultados(resultados, query) {
    const resultsDiv = document.getElementById('results');
    if (resultados.length > 0) {
        resultsDiv.innerHTML = `
            <div class="results-head">
                <h1>Resultados para: <span class="query-text">"${query}"</span></h1>
                <a href="#" class="link-back" onclick="limparResultados()">← Voltar à página principal</a>
            </div>
            <div class="grid-products">
                ${resultados.map(produto => `
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

// Função para limpar resultados e voltar à página principal
function limparResultados() {
    document.getElementById('results').innerHTML = '';
}

// Adiciona o event listener ao formulário quando a página carregar
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
                // Se a query estiver vazia, limpa os resultados ou mostra uma mensagem
                document.getElementById('results').innerHTML = '<p class="muted">Por favor, digite um termo de busca.</p>';
            }
        });
    }
});
