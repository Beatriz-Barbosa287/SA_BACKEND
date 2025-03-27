
import Produto from './Produto';

async function migrate() {
    await Produto.sync({ force: true });
    console.log("Tabela de produtos criada!");
}

migrate();