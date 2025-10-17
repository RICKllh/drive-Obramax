// Array de produtos (convertido de Python para JavaScript)
const produtos = [
    { 'nome': 'Telha Ondulada 5mm 2,44x1,10m Multilit', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26020623-1200-1200?v=638960565622970000&width=1200&height=1200&aspect=true', 'obm': '89877543' },
    { 'nome': 'Telha Ondulada 5mm 2,44x1,1m Casalit', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26065175-1200-1200?v=638961269032070000&width=1200&height=1200&aspect=true', 'obm': '89648741' },
    { 'nome': 'Telha Ondulada 6mm 2,44x1,1m Brasilit', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26069679-1200-1200?v=638961362293230000&width=1200&height=1200&aspect=true', 'obm': '89077415' },
    { 'nome': 'Telha Ondulada 6mm 3,05x1,1m Casalit', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26065973-1200-1200?v=638961283844870000&width=1200&height=1200&aspect=true', 'obm': '89648545' },
    { 'nome': 'Telha Ondulada 4mm 2,44x0,5m Casalit', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26075218-1200-1200?v=638961473588500000&width=1200&height=1200&aspect=true', 'obm': '89648524' },
    { 'nome': 'Cimento CPII E-32 50Kg Campeão', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26013713-1200-1200?v=638960460774630000&width=1200&height=1200&aspect=true', 'obm': '89535684' },
    { 'nome': 'Cimento CPIII 32RS 50Kg CSN', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26107364-1200-1200?v=638962115315600000&width=1200&height=1200&aspect=true', 'obm': '89555480' },
    { 'nome': 'Cimento CPII E-32 25Kg Campeão', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26129515-1200-1200?v=638962587642500000&width=1200&height=1200&aspect=true', 'obm': '89767216' },
    { 'nome': 'Cimento CPII F-32 50Kg Votoran', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26103845-1200-1200?v=638962046114700000&width=1200&height=1200&aspect=true', 'obm': '89896142' },
    { 'nome': 'Meio Bloco Cerâmico de Vedação 14x19x14cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26017938-1200-1200?v=638960519996000000&width=1200&height=1200&aspect=true', 'obm': '89286456' },
    { 'nome': 'Bloco Cerâmico Estrutural Furo Vertical 14x19x39cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26126188-1200-1200?v=638962507854500000&width=1200&height=1200&aspect=true', 'obm': '89255894' },
    { 'nome': 'Meio Bloco Cerâmico de Vedação 11,5x14x11,5cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/25947034-1200-1200?v=638959521927870000&width=1200&height=1200&aspect=true', 'obm': '89286533' },
    { 'nome': 'Bloco Cerâmico de Vedação 11,5x19x29cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26016384-1200-1200?v=638960497091430000&width=1200&height=1200&aspect=true', 'obm': '89286582' },
    { 'nome': 'Bloco Cerâmico de Vedação Baianinho 9x19x19cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/25945041-1200-1200?v=638959495035430000&width=1200&height=1200&aspect=true', 'obm': '89286421' },
    { 'nome': 'Bloco Cerâmico de Vedação 14x19x29cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/26008697-1200-1200?v=638960389630770000&width=1200&height=1200&aspect=true', 'obm': '89286442' },
    { 'nome': 'Bloco Cerâmico de Vedação 11,5x14x24cm', 'foto': 'https://lojaobramax.vtexassets.com/arquivos/ids/25946402-1200-1200?v=638959513416000000&width=1200&height=1200&aspect=true', 'obm': '89286526' }
];

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
                                <a class="btn-primary small" href="https://www.google.com/search?q=${encodeURIComponent(produto.nome)}" target="_blank" rel="noopener">Pesquisar na web</a>
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