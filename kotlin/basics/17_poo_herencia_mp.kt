open class MaterialBibliografico(val titulo: String) {
    fun mostrarTitulo() {
        println("Material: $titulo")
    }
}

class LibroImpreso(titulo: String, val paginas: Int) : MaterialBibliografico(titulo) {
    fun mostrarPaginas() {
        println("Páginas: $paginas")
    }
}

fun main() {
    val libro = LibroImpreso("Don Quijote de la Mancha", 863)
    libro.mostrarTitulo()
    libro.mostrarPaginas()
}