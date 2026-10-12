import promptSync from 'prompt-sync';

const prompt = promptSync();
// condicionales
// Un programa para una biblioteca necesita verificar si un usuario es menor de edad para restringirle el préstamo de material sensible. 
// Crea una variable con la edad del lector y muestra un mensaje si es menor de 18 años.

let edad_del_lector : number = 17;
let contenido_sensible : boolean;
if (edad_del_lector >= 18) {
    contenido_sensible = true;
    console.log("Acceso al contenido restrigido: ", contenido_sensible)
} else {
    contenido_sensible = false;
    console.log("Acceso denegado, permisos: ", contenido_sensible)
}

// condicionales dobles o dos caminos
// Un programa para una biblioteca necesita comprobar si un libro tiene más de 300 páginas para clasificarlo como "libro extenso" o "libro estándar". 
// Crea la condición y muestra el mensaje correspondiente según el caso.

let paginasLibro : number = Number(prompt("Ingrese el numero de paginas del libro: "))

if (paginasLibro >= 300) {
    console.log("Clasificación: Libro Extenso")
} else {
    console.log("Clasificacion: Libro estándar")
}

// condicion multiple
// Un programa para una biblioteca evalúa los días de retraso en la entrega de un libro para aplicar una multa escalonada: 
// si el retraso es mayor a 10 días, 
// si es mayor a 5 días, 
// o si está dentro del plazo normal. 
// Escribe las condiciones múltiples con sus respectivos mensajes.


let dias_retraso : number = 2

if (dias_retraso <= 2) {
    console.log("Plazo normal de retraso");
} else if (dias_retraso <=5) {
    console.log("Plazo de tiempo vencido hasta por 5 dias")
} else {
    console.log("Plazo de tiempo excesivo, Multa")
};

// condicional anidado
// Un programa para una biblioteca verifica el estado de la membresía de un socio. Primero comprueba si la membresía está activa; 
// dentro de esa validación, verifica si el socio tiene la cuota al día para permitirle el préstamo. 
// Escribe los bloques condicionales anidados.

let membresiaCaducada : boolean = true;
let cuota : string = "No";

if (membresiaCaducada === false) {
    console.log ("Su cuota esta al dia y su membresia tambien")
} else {
    if (membresiaCaducada === true && cuota === "Si" ) {
        console.log("El pago ya se registro, pronto su cuenta estará activa")
    } else {
        console.log("Cuenta desahbilitada por falta de pago")
    }
}

// condicional con operador logico
// Un programa para una biblioteca determina si un libro califica para la sección de "Novedades Destacadas" evaluando que su año de publicación sea reciente, 
// que tenga un stock mayor a 5 ejemplares y que su categoría sea de alta demanda. Escribe la condición usando operadores lógicos.

let novedadesDestacadas : string[] = ["Casper", "Luna de Pluton"];
let nombreLibro : string = String(prompt("Nombre del libro: "))
let fecha : number = 2026;
let stock : number = 6;
let categoria : string = "Alta demanda"

if (fecha >= 2026 && stock >= 5 && categoria === "Alta demanda") {
    novedadesDestacadas.push(nombreLibro)
    console.log("El Libro está en Novedades destacadas")
} else {
    console.log("Libro no encontrado en las novedades destacadas")
}

console.log("Libros destacados: ", novedadesDestacadas)

// condicionales if con operadores logicos
// Un programa para una biblioteca procesa la solicitud de un libro digital evaluando si el usuario tiene una cuenta premium 
// o si cuenta con una autorización especial del bibliotecario.
//  Escribe la estructura condicional usando operadores lógicos para otorgar o denegar el acceso.

const premium : boolean = true
const autorizacionBibliotecario : boolean = true

if (premium === true || autorizacionBibliotecario === true) {
    console.log("Autorización aceptada") 
} else {
    console.log("Autorización denegada") 
}
