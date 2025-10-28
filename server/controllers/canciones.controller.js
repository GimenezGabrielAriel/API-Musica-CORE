import { faker } from '@faker-js/faker';

// Genera una canción aleatoria
function generarCancion() {
  return {
    id: faker.string.uuid(),
    titulo: faker.music.songName(),
    artista: faker.person.fullName(),
    album: faker.word.words({ count: 2 }),
    duracion: `${faker.number.int({ min: 120, max: 420 })}s`,
    genero: faker.music.genre(),
    fechaLanzamiento: faker.date.past().toISOString().split('T')[0]
  };
}

// Crea un array inicial con varias canciones
const canciones = Array.from({ length: 10 }, generarCancion);

// Controlador
const controladorCanciones = {
  obtenerTodos: (req, res) => {
    res.statusMessage = "Todo bien";
    res.status(200).json(canciones);
  },

  buscarCancion: (req, res) => {
    const id = req.params.id;
    const cancion = canciones.find(can => can.id === id);
    if (!cancion) {
      return res.status(404).json({ message: "No hay canción con ese id" });
    }
    res.status(200).json(cancion);
  }
};

export { canciones };
export default controladorCanciones;
