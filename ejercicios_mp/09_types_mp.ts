type CodigoLibro = string | number;
type AutorApellido = string;
type UbicacionPasillo = [number, number];
type DimensionLibro = {
    alto: number;
    ancho: number;
}

const ubicacionOrigen: DimensionLibro = { alto: 0, ancho: 0 };
const codigo1: CodigoLibro = 101;
const codigo2: CodigoLibro = "LIB-001";

type LibroDimensionado = DimensionLibro & {
    grosor: number;
}

interface Lector {
    readonly idSocio: number;
    nombre: string;
    correo: string;
    telefono?: string;
}

const lector1: Lector = {
    idSocio: 1,
    nombre: "Carlos",
    correo: "carlos@gmail.com"
};

const lector2: Lector = {
    idSocio: 2,
    nombre: "Elena",
    correo: "elena@gmail.com",
    telefono: "0991234567"
};

console.log(lector1);
console.log(lector2);