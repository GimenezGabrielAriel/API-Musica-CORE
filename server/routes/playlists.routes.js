import { Router } from 'express';
import controladorPlaylists from '../controllers/playlists.controller.js';

const routePlaylist = Router();

routePlaylist.get('/', controladorPlaylists.obtenerTodas);      // GET /api/playlists

routePlaylist.get('/:id', controladorPlaylists.buscarPlaylist);  // GET /api/playlists/:id


export default routePlaylist;
