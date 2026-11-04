import * as bookControllers from '../controllers/bookControllers.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/', bookControllers.fetchAllBooks);
bookRoutes.post('/', bookControllers.createBook);
bookRoutes.put('/:id', bookControllers.editBook);
bookRoutes.delete('/:id', bookControllers.deleteBook);

export default bookRoutes;
