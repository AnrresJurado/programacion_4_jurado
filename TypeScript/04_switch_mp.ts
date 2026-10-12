type CategoriaLibro = 
  | "Ficción"
  | "Historia"
  | "Ciencia"
  | "Programación"
  | "Arte";

let categoria: CategoriaLibro = "Programación";

switch (categoria) {
    case 'Ficción':
        console.log("Los libros de ficción están en el pasillo A");
        break;
    case "Historia":
        console.log("Los libros de historia están en el pasillo B");
        break;
    case "Ciencia": 
        console.log("Los libros de ciencia están en el pasillo C");
        break;
    case "Programación":
        console.log("Los libros de programación están en el pasillo D");
        break;
    case "Arte":
        console.log("Los libros de arte están en el pasillo E");
        break;
    default:
        console.log("Categoría no encontrada");
}

type SeccionBiblioteca = "General" | "Referencia" | "Infantil";

let seccion: SeccionBiblioteca = "Referencia";
let diasPrestamoPermitidos: number = 7;
let socioAlDia: boolean = true;

switch (seccion) {
    case 'General':
        if (diasPrestamoPermitidos <= 15 && socioAlDia) {
            console.log("Préstamo aprobado para la sección General");
        } else {
            console.log("Préstamo denegado para la sección General");
        }
        break;
    case 'Referencia':
        if (diasPrestamoPermitidos <= 3 && socioAlDia) {
            console.log("Préstamo aprobado para la sección de Referencia");
        } else {
            console.log("Préstamo denegado para la sección de Referencia");
        }
        break;
    case 'Infantil':
        if (diasPrestamoPermitidos <= 30 && socioAlDia) {
            console.log("Préstamo aprobado para la sección Infantil");
        } else {
            console.log("Préstamo denegado para la sección Infantil");
        }
        break;
    default:
        console.log("Sección desconocida en la biblioteca");
}