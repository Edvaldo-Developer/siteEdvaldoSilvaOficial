module.exports = () => {

    this.getContatos = (connection, callback) => {
        connection.query('select * from contatos', callback );
    }

    this.salvarContato = (contato, connection, callback) => {
        connection.query('insert into contatos set ?', contato, callback)
    }

    return this;
}