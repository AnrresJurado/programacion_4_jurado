import promptSync from 'prompt-sync';

const prompt = promptSync();

let tituloLibro = prompt("Ingrese el título del libro (Clean Code, Refactoring, Design Patterns, Nodejs, TypeScript): ");
let paginas = Number(prompt("Ingrese el número de páginas del libro: "));
let anioPublicacion = Number(prompt("Ingrese el año de publicación del libro: "));

if (tituloLibro === "Clean Code" || tituloLibro === "Refactoring" || tituloLibro === "Design Patterns" || tituloLibro === "Nodejs" || tituloLibro === "TypeScript") {
    if (paginas >= 50 && paginas <= 1500) {
        if (anioPublicacion >= 1950 && anioPublicacion <= 2026) {
            console.log(`El libro ${tituloLibro} tiene ${paginas} páginas y fue publicado en el año ${anioPublicacion}.`);
        } else {
            console.log("El año de publicación debe estar entre 1950 y 2026.");
        }
    } else {
        console.log("Número de páginas inválido. Debe estar entre 50 y 1500.");
    }
} else {
    console.log("Libro desconocido. Ingrese un libro válido.");
}