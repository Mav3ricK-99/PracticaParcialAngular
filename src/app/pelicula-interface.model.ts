export interface PeliculaInterface {
    id: number,
    nombre: string,
    tipo: string, //terror , comedia, amor, otros
    fechaEstreno: Date,
    cantPublico: number,
    fotoPortada: string,
}
