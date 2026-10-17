class MaterialBibliografico {
    consultar(): void {
        console.log("Consulta básica de material");
    }
}

class Libro extends MaterialBibliografico {
    prestarLibro(): void {
        console.log("El libro ha sido registrado para préstamo a domicilio");
    }
}

class Revista extends MaterialBibliografico {
    leerEnSala(): void {
        console.log("La revista se lee exclusivamente en la sala de lectura");
    }
}

const libroCentral = new Libro();
libroCentral.consultar();
libroCentral.prestarLibro();

const revistaCientifica = new Revista();
revistaCientifica.consultar();
revistaCientifica.leerEnSala();