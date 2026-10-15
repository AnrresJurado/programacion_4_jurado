class Boxeador {
    golpear(): void{
        console.log("Golpe Basico")
    }
}

class Rocky extends Boxeador {
    golpeEspecial(): void{
        console.log("Rocky lanza un poderoso gancho")
    }
}

class Apollo extends Boxeador {
    golpeRapido(): void{
        console.log("APollo lanza un jab veloz")
    }
}

const rocky = new Rocky ();
rocky.golpear()
rocky.golpeEspecial()
const apollCreek = new Apollo()
apollCreek.golpear()
apollCreek.golpeRapido()