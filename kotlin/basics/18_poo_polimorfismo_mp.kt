open class PersonalBiblioteca {
    open fun atenderSolicitud() {
        println("Atendiendo consulta general en la biblioteca")
    }
}

class BibliotecarioPrestamos : PersonalBiblioteca() {
    override fun atenderSolicitud() {
        println("Registrando préstamo y devolución de libros")
    }
}

class EncargadoArchivo : PersonalBiblioteca() {
    override fun atenderSolicitud() {
        println("Catalogando y conservando documentos históricos")
    }
}

fun main() {
    val personal1 = BibliotecarioPrestamos()
    val personal2 = EncargadoArchivo()

    personal1.atenderSolicitud()
    personal2.atenderSolicitud()
}