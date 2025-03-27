# situação de aprendizagem-Catalogo de Produtos

-> Membros: Adrielly; Beatriz G; 

Etapas realizadas 

Para desenvolver a página Web da Situação de Aprendizagem: Criação de um Catálogo de Produtos Simplificado, realizamos alguns passos que foram essenciais para o resultado final da atividade.

1º Passo:
Para iniciarmos o nosso desenvolvimento, começamos preparando e configurando o nosso ambiente de trabalho, ou seja, nossa máquina. Nela, já haviam sido baixadas o Node e o MySQL, então, criamos um banco de dados para o catálogo de produtos.Inicializamos um projeto node e instalamos todas as dependências necessárias para o funcionamento da página;

2º Passo:
Em seguida, definimos a estrutura da tabela de produtos no banco de dados e utilizamos o Sequelize para criar um Model correspondente à tabela de
produtos. Além disso, também criamos e executamos as migrações para criar a tabela no banco de dados.

3º Passo:
Logo após, definimos as rotas no Express.js para exibir a lista de produtos, os detalhes de um produto específico, o formulário de cadastro de um novo produto e para processar o formulário de cadastro de um novo produto.
Ou seja, para realizar as atividades requeridas pela situação de aprendizagem.

4º Passo:
Depois, criamos os Controllers para cada rota, que são responsáveis por consultar o banco de dados utilizando o Sequelize (para obter
os dados dos produtos), renderizar as páginas HTML utilizando o EJS (passando os
dados dos produtos para as views) e processar os dados do formulário de cadastro, validando-os
e salvando o novo produto no banco de dados.

5º Passo:
Posteriormente, criamos as Views, os Templates, ou seja, os arquivos em EJS para exibir a lista de produtos, os detalhes de um em específico e o formulário de cadastro. Além disso, utilizamos o HTML, CSS e o JavaScript para formatar as páginas e torná-las visualmente atraentes.

6º Passo:
Para encerrar fizemos uma sessão de testes com o sistema, para garantir que todas as funcionalidades estejam funcionando corretamente. Verificamos se os produtos e os detalhes são exibidos de maneira correta e se os novos produtos são cadastrados corretamente.

Dificuldades identificadas e Soluções encontradas

Na realização da atividade “Catálogo de Produtos”, encontramos algumas dificuldades ao longo do percurso:

Não realizava conexão com o banco de dados, database.js;
Quando fez, não gravava os dados nas tabelas do BD;
Não funcionava o front-end;
Não reconhecia as imagens;

Solucionamos esses problemas através de:

Pesquisas;
Vídeos no youtube;
Comparação com as nossas páginas, já desenvolvidas nas aulas anteriores e, com o exemplo fornecido.