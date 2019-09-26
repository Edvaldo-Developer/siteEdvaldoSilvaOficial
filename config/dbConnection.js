var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'MY_STACK'
    });
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}