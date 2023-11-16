const Book = require('../models/book.model');

exports.getBooks = async (req,res) => {
    try{
        const books = await Book.find();
        return res.status(200).json(
            {
                message: "Consulta de Libros",
                data: books
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al consultar Libros",
                data: error
            }
        );
    }
}

exports.getBookById =async (req,res) => {
    try{
        const book = await Book.findById(bookId);
        const bookId = req.params.bookId;
        return res.status(200).json(
            {
                message: "Consultando de Libro por ID: "+bookId,
                data: book
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error en consultar libro",
                data: error
            }
        );
    }
}

exports.newBooks = async (req,res) => {
    try{
        const {titulo, autor, isbn, genero, precio, stock } = req.body;
        const newBook = new Book({ titulo, autor, isbn, genero, precio, stock});
        await newBook.save();
        return res.status(200).json(
            {
                message: "Libro creado",
                data: newBook
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al crear el libro",
                data: error
            }
        );
    }
}

exports.updateBook = async (req,res) => {
    const bookId = req.params.bookId;
    const newData = req.body;
    try{
        const updateBook = await Book.findByIdAndUpdate(bookId, newData, {new: true});
        return res.status(201).json(
            {
                message: "Actualizar libro por ID: ",
                data: updateBook 
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al actualizar",
                data: error
            }
        );
    }
}

exports.deleteBook = async (req,res) => {
    const bookId = req.params.bookId;
    try{
        await Book.findByIdAndDelete(bookId);
        return res.status(200).json(
            {
                message: "Libro eliminado con ID: "+bookId
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al eliminar libro",
                data: error
            }
        );
    }
}