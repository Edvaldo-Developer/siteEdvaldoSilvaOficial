var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: 'my-stack.mysql.uhserver.com',
        user: 'edvaldosilva639',
        password: '-Social4904',
        database: 'my_stack'
    });
    
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}