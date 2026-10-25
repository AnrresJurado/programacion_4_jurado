interface ParticipanteTorneo {
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
    transformarse(): void ;
}

class Goku implements ParticipanteTorneo{
    nombre = "Goku";
    nivelPoder = 9000;
    presentarTecnica(): void {
        console.log("Goku utiliza el Kamehameha")
    }

    transformarse(): void {
        console.log("Transformacion Goku SSJ 2")
    }
}

class Vegeta implements ParticipanteTorneo {
    nombre = "Vegeta";
    nivelPoder= 8500;
    presentarTecnica(): void {
        console.log("Vegeta utliza Final Flash")
    }

    transformarse(): void {
        console.log("Transformacion Vegeta SSJ 2")
    }
}

const goku = new Goku();
const vegeta = new Vegeta()

goku.presentarTecnica();
vegeta.presentarTecnica();