import * as bookController from '../controllers/bookControllers.js';
import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/', bookController.fetchAllBooks);

export default bookRouter;
