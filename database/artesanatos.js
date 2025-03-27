const Sequelize = require ("sequelize");
const connection = require("./database");
const { type } = require("os");

const Produto = connection.define('produtos',{
    
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }, 
    imagem: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Produto.sync({force: false}).then(() => {});

module.exports = Produto;