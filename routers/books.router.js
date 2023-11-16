const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', booksController.getBooks);

router.get('/:bookId', booksController.getBookById);

router.post('/',authMiddleware.autenticateToken, booksController.newBooks);

router.put('/:bookId',booksController.updateBook);

router.delete('/:bookId', booksController.deleteBook);

module.exports = router;