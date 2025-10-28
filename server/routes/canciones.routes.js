import { Router } from "express";
import controladorCanciones from "../controllers/canciones.controller.js";


const routeCancion = Router();

routeCancion.get('/',controladorCanciones.obtenerTodos) // GET /api/canciones

routeCancion.get('/:id',controladorCanciones.buscarCancion) // GET /api/canciones/:id

export default routeCancion;