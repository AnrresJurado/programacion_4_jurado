abstract class Saiyajin {
    abstract transformarse(): void;
        detectarKi(): void{
            console.log("Detectabdo nivel de energia")
    }
}

class Goku extends Saiyajin {
    transformarse(): void{
        console.log("Goku se transforma en super saiyajin")
    }            
}

class Vegeta extends Saiyajin {
    transformarse(): void {
        console.log("Vegeta se transforma en super saiyajin")
    }
}

const Saiyajines: Saiyajin[]= [
    new Goku(),
    new Vegeta()
]
console.log(Saiyajines)
Saiyajines.forEach(boxeador=>boxeador.detectarKi());