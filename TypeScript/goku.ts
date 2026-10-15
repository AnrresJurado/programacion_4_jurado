class Guerrero {
  atacar(): void {
    console.log("El guerro realiza un ataque basico");
 }
}

class Goku extends Guerrero {
  kamehameha(): void {
     console.log("Goku realiza un atque poderoso")
 }
}

class Vegeta extends Guerrero {
  finalFlash(): void { 
     console.log("Vegeta utiliza un atque poderoso")
 }
}


const goku = new Goku();
goku.kamehameha()
goku.atacar()

const vegeta = new Vegeta()
vegeta.atacar()
vegeta.finalFlash()
