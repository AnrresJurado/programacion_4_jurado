class LibroBiblioteca {
    public titulo: string;
    public paginas: number;
    public stock: number;
    constructor (
        titulo: string,
        paginas: number,
        stock: number,
    ){
        this.titulo = titulo;
        this.paginas = paginas;
        this.stock = stock;
    }
    prestar(): void {
        this.stock -= 1;
        console.log(`El libro '${this.titulo}' ha sido prestado`)
    }
    reabastecer(): void {
        this.stock += 5;
        console.log(`El libro '${this.titulo}' ha sido reabastecido`)
    }
}

const libro1 = new LibroBiblioteca("Clean Code", 464, 10);
const libro2 = new LibroBiblioteca("Design Patterns", 395, 3);

libro1.prestar();
console.log(libro2.stock);
libro2.reabastecer();
console.log(libro2.stock);