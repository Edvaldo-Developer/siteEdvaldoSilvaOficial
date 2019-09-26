const app = require('./config/server');


// let rotaMain = require('./app/routes/main');
// rotaMain(app);


app.listen(3000, () => {
    console.log('Servidor ON');
});