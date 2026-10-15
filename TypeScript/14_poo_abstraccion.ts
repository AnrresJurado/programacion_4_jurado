abstract class Boxeador {
    abstract atacar(): void;
        descansar(): void{
            console.log("El Boxeador recupera energia")
    }
}

class Rocky extends Boxeador {
    atacar(): void{
        console.log("Rocky lanza un gancho ")
    }            
}

class Apollo extends Boxeador {
    atacar(): void {
        console.log("Apollo lanza un upper")
    }
}

const Boxeadores: Boxeador[]= [
    new Rocky(),
    new Apollo()
]
console.log(Boxeadores)
Boxeadores.forEach(boxeador=>boxeador.atacar());