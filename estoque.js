let estoque = [];

function adicionarProduto(id, nome, qtd) {
    estoque.push({ id, nome, qtd: parseInt(qtd) });
}

function listarProdutos() {
    return estoque;
}

function removerProduto(id) {
    estoque = estoque.filter(p => p.id !== id);
}

function editarProduto(id, qtd) {
    const produto = estoque.find(p => p.id === id);
    if (produto) {
        produto.qtd = parseInt(qtd);
    }
}

module.exports = {
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};
