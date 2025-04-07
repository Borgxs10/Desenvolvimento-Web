const express = require('express');
const app = express();
const port = 3000;

const estoque = require('./util/estoque');

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.adicionarProduto(id, nome, qtd);
    res.send('Produto adicionado!');
});

app.get('/listar', (req, res) => {
    res.json(estoque.listarProdutos());
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque.removerProduto(id);
    res.send('Produto removido!');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque.editarProduto(id, qtd);
    res.send('Produto atualizado!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
