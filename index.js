const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection');

const booksRouter = require('./routers/books.router');
const usersRouter = require('./routers/users.router');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));

app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.get("/", (req, res) => {
    res.send("Bienvenido a Libreria API"); 
})

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost: "+port);
})
