type Personaje = 
  | "Luke Skywalker"
  | "Darth Vader"
  | "Leia Organa"
  | "Han Solo"
  | "Yoda";

let personaje: Personaje = "Han Solo";

switch (personaje) {
    case 'Luke Skywalker':
        console.log("Luke Skywalker es un Jedi");
        break;
    case "Darth Vader":
        console.log("Es un Sith");
        break;
    case "Leia Organa": 
        console.log("Leia es una princesa");
        break;
    case "Han Solo":
        console.log("Es un contrabandista");
        break;
    case "Yoda":
        console.log("Es un personaje verde");
        break;
    default:
        console.log("Raro");
}

type Jedis = "Luke" | "Obiwan" | "Yoda";

let jedi: Jedis = "Luke";
let nivelFuerza: number = 100;
let tieneSable: boolean = true;

switch (jedi) {
    case 'Luke':
        if (nivelFuerza > 80 && tieneSable) {
            console.log("Luke es un Jedi poderoso");
        } else {
            console.log("Luke no es un Jedi poderoso");
        }
        break;
    case 'Obiwan':
        if (nivelFuerza > 70 && tieneSable) {
            console.log("Obiwan es un Jedi poderoso");
        } else {
            console.log("Obiwan no es un Jedi poderoso");
        }
        break;
    case 'Yoda':
        if (nivelFuerza > 90 && tieneSable) {
            console.log("Yoda es un Jedi poderoso");
        } else {
            console.log("Yoda no es un Jedi poderoso");
        }
        break;
    default:
        console.log("Jedi desconocido");
}