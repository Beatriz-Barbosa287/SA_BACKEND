const express = require("express");
const app = express();
const connection = require("./database/database");
const Produto = require("./database/artesanatos");

// Configuração do motor de visualização
app.set('view engine', 'ejs');

// Para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Usar express para parse de dados de formulários
app.use(express.urlencoded({ extended: true }));  // Para aceitar dados de formulários
app.use(express.json());  // Para aceitar JSON no corpo da requisição

// Conexão com o banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o BD feita com sucesso!");
    })
    .catch((msgErro) => {
        console.error("Erro ao conectar ao banco:", msgErro);
    });

// Rota principal - Listar produtos
app.get("/", async (req, res) => {
    try {
        const produtos = await Produto.findAll(); // Busca todos os produtos
        res.render("index", { produtos }); // Passa a variável 'produtos' para a view
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).send("Erro ao buscar produtos.");
    }
});

// Rota para exibir o formulário de novo produto
app.get("/novo", (req, res) => {
    res.render('novo'); // Renderiza o formulário para novo produto
});

// Rota para exibir os detalhes de um produto
app.get('/artesanatos/:id', async (req, res) => {
    try {
        const produtoId = req.params.id;  // Obtém o ID do produto da URL
        const produto = await Produto.findByPk(produtoId);  // Busca o produto no banco de dados

        if (!produto) {
            return res.status(404).send("Produto não encontrado.");
        }

        // Renderiza a página de detalhes do produto (detalhes.ejs)
        res.render('detalhes', { produto });
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        res.status(500).send("Erro ao buscar produto.");
    }
});

// Rota POST para adicionar um novo produto
app.post('/novo', async (req, res) => {
    try {
        const { nome, descricao, preco, imagem } = req.body;
        await Produto.create({ nome, descricao, preco, imagem }); // Cria o novo produto no banco
        res.redirect('/');  // Redireciona para a página principal após adicionar
    } catch (error) {
        console.error("Erro ao adicionar novo produto:", error);
        res.status(500).send("Erro ao adicionar novo produto.");
    }
});

// Configura o servidor para rodar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
