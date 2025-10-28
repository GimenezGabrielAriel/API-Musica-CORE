import { faker } from '@faker-js/faker';
import { canciones } from './canciones.controller.js'; // importamos el array real

// Función para generar una playlist usando canciones existentes
function generarPlaylist() {

  // Seleccionamos canciones aleatorias del catálogo existente
  const cancionesAleatorias = [];
  for (let i = 0; i < 5; i++) {
    const cancionRandom = faker.helpers.arrayElement(canciones);
    cancionesAleatorias.push(cancionRandom);
  }

  return {
    idPlaylist: faker.string.uuid(),
    nombre: faker.word.words({ count: 3 }),
    descripcion: faker.lorem.sentence(),
    canciones: cancionesAleatorias,
    creador: faker.person.fullName(),
    fechaCreacion: faker.date.past().toISOString().split('T')[0],
  };
}

// Creamos unas playlists
const playlists = Array.from({ length: 3 }, generarPlaylist);

// Controlador de playlists
const controladorPlaylists = {
  obtenerTodas: (req, res) => {
    res.status(200).json(playlists);
  },

  buscarPlaylist: (req, res) => {
    const id = req.params.id;
    const playlist = playlists.find(p => p.idPlaylist === id);

    if (!playlist) {
      return res.status(404).json({ message: "No se encontró la playlist con ese id" });
    }

    res.status(200).json(playlist);
  }
};

export default controladorPlaylists;
