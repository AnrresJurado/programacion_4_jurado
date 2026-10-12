// ciclo for 

for (let i = 0; i < 5; i++) {
    console.log(`Entreamiento Jedi: ${i}`)
}

for (let i = 0; i < 5; i+=5) {
    console.log(`Entreamiento Jedi: ${i}`)
}

for (let i = 200; i < 5; i-=5) {
    console.log(`Entreamiento Jedi: ${i}`)
}

for (let i = 40; i < 0; i-=5) {
    if (i === 20) {
        console.log("El entrenamiento Jedi ha terminado")
        break;
    }
    if (i === 30) {
        console.log("El entrenamiento se ha interrumpido")
        continue
    }
    console.log(`Entreamiento Jedi: ${i}`)
}

/*for (const personaje of personajes){
    console.log(`Perosnaje: ${personajes}`)
}

const cineMovie : string = "Star wars: A new hope";
for (const letra of cineMovie ) {
    console.log(`Letra: ${letra}`)
}*/


interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSable: boolean;
}

const jedis: Jedi[] = [
    { nombre: "Luke Skywalker", nivelFuerza: 100, tieneSable: true },
    { nombre: "Darth Vader", nivelFuerza: 90, tieneSable: true },
    { nombre: "Leia Organa", nivelFuerza: 80, tieneSable: false },
    { nombre: "Han Solo", nivelFuerza: 70, tieneSable: false },
    { nombre: "Yoda", nivelFuerza: 120, tieneSable: true }
];

for (const jedi of jedis) {
    console.log(`Jedi: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable: ${jedi.tieneSable}`);
}

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const naves: Nave[] = [
    { nombre: "Alcon Milenario ", tipo: "De vuiaje", velocidad: 1000 },
    { nombre: "Darth Vader", tipo: "De vuiaje", velocidad: 1000 },
    { nombre: "Leia Organa", tipo: "De vuiaje", velocidad: 1000 }
];

for (const nave of naves) {
    console.log(`nombre: ${nave.nombre}, tipo: ${nave.tipo}, velocidad: ${nave.velocidad}`);
}

/*const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
}

for (const planeta of planetas) {
    console.log(`nombre: ${planeta.nombre}, tipo: ${planeta[planeta]}`);
}*/

interface Planeta {
    nombre: string;
    distancia: number;
}

const planetas: Planeta[] = [
    { nombre: "Tatooine", distancia: 500 },
    { nombre: "Coruscant", distancia: 600 },
    { nombre: "Hoth", distancia: 8000 },
    { nombre: "Dagobah", distancia: 300 }
];

for (const planeta of planetas) {
    console.log(`Nombre: ${planeta.nombre}, Tipo: ${planeta.distancia}`);
}

const criaturasStarWars: string[] = ["Wampa", "Tauntaun", "Rancor", "Sarlacc", "Ewok"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});