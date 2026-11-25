class EjemplarEncapsulado(private val titulo: String) {
    private var ejemplares = 10

    fun ingresarEjemplares(cantidad: Int) {
        if (cantidad > 0) {
            ejemplares += cantidad
        } else {
            println("Cantidad no válida para $titulo")
        }
    }

    fun mostrarDisponibilidad() {
        println("Libro: $titulo | Ejemplares disponibles: $ejemplares")
    }

    fun ajustarStock(cantidad: Int) {
        if (cantidad >= 0) {
            ejemplares = cantidad
        } else {
            println("El stock no puede ser negativo")
        }
    }
}

fun main() {
    val libro1 = EjemplarEncapsulado("Cien años de soledad")
    libro1.ingresarEjemplares(5)
    libro1.mostrarDisponibilidad()
    libro1.ajustarStock(8)
    libro1.mostrarDisponibilidad()
}