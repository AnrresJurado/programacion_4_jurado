const planeta: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
}

for (const planetas in planeta) {
    console.log(`Nombre: ${planetas}, Tipo: ${planeta[planetas]}`);
}
