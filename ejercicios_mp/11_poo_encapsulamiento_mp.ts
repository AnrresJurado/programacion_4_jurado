class LibroInventario {
    private stock: number = 10;

    prestarLibro (cantidad: number): void {
        if (cantidad > 0) {
            this.stock = Math.max(0, this.stock - cantidad);
        }
    }
    consultarStock(): number {
        return this.stock;
    }
}

const libro = new LibroInventario();
libro.prestarLibro(15);
console.log(libro.consultarStock());
libro.prestarLibro(3);
console.log(libro.consultarStock());