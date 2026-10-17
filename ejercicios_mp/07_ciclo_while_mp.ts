// Ejercicio 1 

let cantidadLibros = 700;
let cantidadLibrosMaxima = 2000;
while (cantidadLibros < cantidadLibrosMaxima) {
    console.log("Cantidad de Libros: ", cantidadLibros)
    cantidadLibros += 25;
}


// Ejercicio 2

let paginaActual = 1;
while (paginaActual <= 100) {
    console.log("Pagina Actual: ", paginaActual)
    paginaActual++;
}


// Ejercicio 3
// Un programa para una biblioteca simula el proceso de verificación de libros devueltos mediante una prueba de calidad aleatoria en un lote de 10 ejemplares, 
// contando y mostrando el total de libros que pasaron la inspección exitosamente en cada intento.

let libroEntregado = 0;
let enBuenEstado = 0;
while (libroEntregado < 10) {
    enBuenEstado++;
    let bueno = Math.random() < 0.5;
    if (bueno) {
        enBuenEstado++;
        console.log(`Libro ${libroEntregado}: ¡En Buen Estado! Total de libros: ${enBuenEstado}`);
    } else {
        console.log(`Libro ${libroEntregado}: Mal Estado. Total de libros: ${enBuenEstado}`);
    }
}


// Ejercicio 4

let librosLeidos = 0;
do {
    librosLeidos++
    console.log(`Libro leido numero: ${librosLeidos}`)
} while (librosLeidos < 5);


// Ejercicio 5
// Un programa para una biblioteca procesa un arreglo de objetos que representan libros con sus atributos (título, autor y número de páginas), 
// recorriéndolo con un bucle while que omite ciertos géneros mediante condiciones y detiene la búsqueda si encuentra un libro que excede cierto límite de páginas.

interface Libro {
    titulo: string;
    autor: string;
    numeroDePaginas: number;
}

const librosEscaneados: Libro[] = [
    { titulo: "Cien años de Soledad", autor: "Gabriel Garcia Marquez", numeroDePaginas: 1800 },
    { titulo: "Yo-Robot", autor: "Viktor Ashimov", numeroDePaginas: 1000 },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", numeroDePaginas: 1200 },
    { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", numeroDePaginas: 900 }
    
]; 

let indice = 0;
while (indice < librosEscaneados.length) {
    const librito = librosEscaneados[indice];
    if (librito?.autor === "Gabriel Garcia Marquez") {
        indice++;
        continue;
    }

    if (librito?.numeroDePaginas < 1000) {
        break;
    }
    console.log(`Libro: ${librito.titulo}, Autor: ${librito.autor}, Numero de Paginas: ${librito.numeroDePaginas}`);
    indice++;
}


