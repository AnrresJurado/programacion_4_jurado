abstract class RecursoBiblioteca {
    abstract fun procesar()
}

class LibroFisico : RecursoBiblioteca() {
    override fun procesar() {
        println("Colocando código de barras y ubicando en estantería")
    }
}

class RevistaDigital : RecursoBiblioteca() {
    override fun procesar() {
        println("Publicando PDF indexado en el repositorio digital")
    }
}

fun main() {
    val libroFisico = LibroFisico()
    libroFisico.procesar()

    val revistaDigital = RevistaDigital()
    revistaDigital.procesar()
    // val recurso = RecursoBiblioteca() // No se puede instanciar una clase abstracta
}