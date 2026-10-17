class Guerrero {
  atacar(): void {
    console.log("El guerro realiza un ataque basico");
 }
}

class Goku extends Guerrero {
  override atacar(): void {
     console.log("Goku realiza un atque poderoso")
 }
}

class Vegeta extends Guerrero {
  override atacar(): void { 
     console.log("Vegeta utiliza un atque poderoso")
 }
}


const peleadores: Guerrero[]= [
    new Goku(),
    new Vegeta(),
]
console.log(peleadores)
peleadores.forEach(peleadores=>peleadores.atacar());