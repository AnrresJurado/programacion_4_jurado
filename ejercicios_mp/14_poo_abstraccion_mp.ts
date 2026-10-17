abstract class MaterialBibliotecaAbstracto {
    abstract atacar(): void;
    descansar(): void {
        console.log("El material pasa por un proceso de mantenimiento y restauración");
    }
}

class LibroPapel extends MaterialBibliotecaAbstracto {
    atacar(): void {
        console.log("El libro impreso se sella para préstamo en sala");
    }            
}

class LibroElectronico extends MaterialBibliotecaAbstracto {
    atacar(): void {
        console.log("El libro electrónico se activa en la plataforma digital");
    }
}

const materialesAbstractos: MaterialBibliotecaAbstracto[] = [
    new LibroPapel(),
    new LibroElectronico()
];
console.log(materialesAbstractos);
materialesAbstractos.forEach(material => material.atacar());