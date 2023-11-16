const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://root:CqLLQDZvJkgh5z2t@libreria.ohtq7ai.mongodb.net/libreria-db?retryWrites=true&w=majority'
)
.then(() => console.log('Conexion exitosa a mongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

module.exports = mongoose;