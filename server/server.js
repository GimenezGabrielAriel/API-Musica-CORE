// importaciones
import express from 'express'
import routeCancion from './routes/canciones.routes.js';
import routePlaylist from './routes/playlists.routes.js';
import { faker } from '@faker-js/faker';

//import routePlaylist from './routes/playlists.routes.js';


// definicion de app y port
const app = express();
const PORT = 8000


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/cancion', routeCancion)
app.use('/api/playlist', routePlaylist)


app.listen(PORT,()=>{
    console.log(`The server is up and running on port ${PORT}`)
})