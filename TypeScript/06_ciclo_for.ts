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