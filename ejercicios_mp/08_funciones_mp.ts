// Funciones simples
function sumarPaginas(paginas1: number, paginas2: number): number {
    return paginas1 + paginas2;
}

const totalPaginas: number = sumarPaginas(150, 250);
console.log(`Total páginas: ${totalPaginas}`);


function mostrarSeccionBiblioteca(nombre: string): void {
    console.log(`Sección de biblioteca: ${nombre}`);
    const categorias: string[] = ["Ficción", "Historia", "Ciencia"];
    for (const categoria of categorias) {
        console.log(`Categoría disponible: ${categoria}`);
    }
}

mostrarSeccionBiblioteca("Biblioteca Central UTE");

// Funciones con parámetros opcionales
function registrarPrestamo(libro: string, dias?: number): void {
    if (dias) {
        console.log(`El libro ${libro} ha sido prestado por ${dias} días.`);
    } else {
        console.log(`El libro ${libro} ha sido prestado.`);
        dias = 7;
        console.log(`Los días de préstamo por defecto: ${dias}`);
    }
}

registrarPrestamo("Clean Code", 15);
registrarPrestamo("Refactoring");

function registrarPrestamo2(libro: string, dias: number = 7): void {
    console.log(`El libro ${libro} ha sido prestado por ${dias} días`);
}

registrarPrestamo2("Design Patterns", 10);
registrarPrestamo("TypeScript Handbook");

// Funciones Flecha
function calcularMulta(diasRetraso: number): number {
    return diasRetraso * 1.5;
}
const calcularMultaFlecha = (diasRetraso: number): number => diasRetraso * 1.5;

const retrasoOriginal: number = 4;
const multaTotal: number = calcularMulta(retrasoOriginal);
console.log(`Días de retraso: ${retrasoOriginal}, Multa total: ${multaTotal}`);

const multaTotalFlecha: number = calcularMultaFlecha(retrasoOriginal);
console.log(`Días de retraso: ${retrasoOriginal}, Multa total (flecha): ${multaTotalFlecha}`);

// Funciones overloads
function formatearDato(valor: number): string;
function formatearDato(valor: string): string;
function formatearDato(valor: boolean): string;

function formatearDato(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es.MX", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "disponible" : "prestado";
    }
    return `"${valor}"`;
};

console.log(formatearDato(1250.5));
console.log(formatearDato(true));
console.log(formatearDato("Clean Code"));

// Closures
function crearControlInventario(inicio: number = 0) {
    let stock = inicio;
    return {
        ingresar: () => ++stock,
        retirar: () => --stock,
        consultar: () => stock,
        reiniciar: () => { stock = inicio; }
    }
}

const inventarioA = crearControlInventario();
const inventarioB = crearControlInventario(20);

inventarioA.ingresar();
inventarioA.ingresar();
inventarioA.ingresar();
inventarioB.ingresar();

console.log(inventarioA.consultar());
console.log(inventarioB.consultar());

inventarioA.reiniciar();
console.log(inventarioA.consultar());