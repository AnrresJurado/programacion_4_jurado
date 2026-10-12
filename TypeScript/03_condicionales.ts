//condicionales 
let nivel : number = 5;
if (nivel < 5) {
    console.log("El charmander puede evolucionar a Charmaleon")
} 

// condiconales dobles o dos caminos 
if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charizard")
}

// condicion muliple
if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else if (nivel >= 8){
    console.log("El Charmander no puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charizard ni a Charmaleon")
}


// condiconal anidado
if (nivel >= 16) {
    console.log("El Charmander puede evolucionar a Charizard")
} else {
    if (nivel >= 8) {
        console.log("El Charmander no puede evolucionar a Charizard")
    } else {
    console.log("El Charmander no puede evolucionar a Charizard ni a Charmaleon")
    }  
}

nivel = 10
let poder : number = 25
// condicional con operador logico
if (nivel >= 8 && nivel < 16 && poder >= 20) {
    console.log("El Charmander puede evolucionar a Charizard")
} else if (nivel >= 16){
    console.log("El Charmander no puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charizard ni a Charmaleon")
}


nivel = 5;
poder = 25;
// condiconales if con operadores logicos 
if (nivel >= 8 || poder >=20 ) {
    console.log("El Charmander puede evolucionar a Charizard")
} else if (nivel >= 16){
    console.log("El Charmander no puede evolucionar a Charizard")
} else {
    console.log("El Charmander no puede evolucionar a Charizard ni a Charmaleon")
}

/*
let medallas : number = 8 
let años : number = 12;
let edad: number = 15

if (medallas >= 8 && edad >= 12 && suspendido === false) {
    if (nivel>= 40 || vida > 0 || tipo == "Fuego" || tipo == "Agua" || tipo = "Electrico") {
        if (nivel >= 80 && ataque >= 90 && vida >= 100) {
            pokemon = "Maestro" 
        } else if () {

        }
    }
}
*/

