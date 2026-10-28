import * as studentController from '../controllers/studentControllers.js';
import express from "express";

 const studentRoute = express.Router();

 studentRoute.get('/', studentController.fetchAllStudent);
 
 studentRoute.post('/', studentController.createStudent);
 
 export default studentRoute;