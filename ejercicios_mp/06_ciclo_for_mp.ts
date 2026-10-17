// ciclo for 

for (let i = 0; i < 5; i++) {
    console.log(`Proceso de catalogación de libro: ${i}`)
}

for (let i = 0; i < 5; i+=5) {
    console.log(`Proceso de catalogación de libro: ${i}`)
}

for (let i = 200; i < 5; i-=5) {
    console.log(`Proceso de catalogación de libro: ${i}`)
}

for (let i = 40; i < 0; i-=5) {
    if (i === 20) {
        console.log("El inventario de la biblioteca ha terminado")
        break;
    }
    if (i === 30) {
        console.log("El inventario se ha interrumpido")
        continue
    }
    console.log(`Proceso de catalogación de libro: ${i}`)
}