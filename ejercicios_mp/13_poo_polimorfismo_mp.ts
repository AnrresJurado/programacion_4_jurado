class MaterialBiblioteca {
    atacar(): void {
        console.log("Acción básica sobre el material");
    }
}

class LibroFisico extends MaterialBiblioteca {
    override atacar(): void {
        console.log("El libro físico se presta para llevar a casa");
    }
}

class LibroDigital extends MaterialBiblioteca {
    override atacar(): void {
        console.log("El libro digital se descarga al instante");
    }
}

const materiales: MaterialBiblioteca[] = [
    new LibroFisico(),
    new LibroDigital(),
    new LibroDigital()
];
console.log(materiales);
materiales.forEach(material => material.atacar());