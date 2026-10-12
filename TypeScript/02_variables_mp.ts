// --- Constantes ---
const MAX_DIAS_PRESTAMO: number = 172;
const MULTA_DIARIA: number = 75;
const SERVICIO_BIBLIOTECA_API: string = "Hola, esta es una app de Gestionamiento Bibliotecario";
const PRESTAMO_ACTIVO: boolean = true;
console.log("Días máximos: ", MAX_DIAS_PRESTAMO)
console.log("Multa diaria: ", MULTA_DIARIA)
console.log("Servicio: ", SERVICIO_BIBLIOTECA_API)
console.log("Préstamo activo: ", PRESTAMO_ACTIVO)


// --- Variables ---
// let
let librosDisponibles: number = 90;
console.log(librosDisponibles)
librosDisponibles = 0;
console.log(librosDisponibles)
librosDisponibles++;
console.log(librosDisponibles)
librosDisponibles += 5;
console.log(librosDisponibles)
librosDisponibles = librosDisponibles + 4;
console.log(librosDisponibles)

let lectorNombre: string = "Andres"
let membresiaCaducada: boolean = false
console.log(lectorNombre)
console.log(membresiaCaducada)

let categoriasLibros : string [] = ["Ayuda Psicológica", "Drama", "Acción"]; 
console.log(categoriasLibros);

let fechaDevolucion: string | null = null;
let codigoISBN: string | undefined;

let codigoInventarioLargo : BigInt = 99999999999n;

// tipo symbol
let libroId1 : symbol = Symbol("...")
console.log(libroId1.description)
let libroId2 : symbol = Symbol("...")
console.log(libroId2.toString())
console.log (libroId1 === libroId2)

let libroDetalle : {
    titulo: string,
    paginas: number,
    stock: number,
    esDigital: boolean
} = {
     titulo: "...",
     paginas: 0, 
     stock: 0,
     esDigital: false
};
console.log(libroDetalle)