import * as studentController from '../controllers/studentControllers.js';
import express from "express";

 const studentRoute = express.Router();

 studentRoute.get('/', studentController.fetchAllStudent);
 studentRoute.post('/', studentController.createStudent);
 studentRoute.put('/:id', studentController.editStudent);
 studentRoute.delete('/:id', studentController.deleteStudent);

 export default studentRoute;