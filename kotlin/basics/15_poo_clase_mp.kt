class Biblioteca {
    var nombre = ""
    var ejemplaresDisponibles = 0
}

class Lector(var nombre: String, var librosPrestados: Int = 0) {

    fun consultarCatalogo() {
        println("Consultando el catálogo digital de la biblioteca")
    }

    fun puedeSolicitarPrestamo(limiteMaximo: Int = 3) {
        val cupoRestante: Int = limiteMaximo - librosPrestados
        if (cupoRestante >= 0) {
            println("El lector $nombre tiene cupo disponible para solicitar préstamo")
        } else {
            println("El lector $nombre ha superado el límite de préstamos")
        }
    }
}

fun main() {
    val bibliotecaCentral = Biblioteca()
    bibliotecaCentral.nombre = "Biblioteca Central"

    val bibliotecaInfantil = Biblioteca()
    bibliotecaInfantil.nombre = "Biblioteca Infantil"
    bibliotecaInfantil.ejemplaresDisponibles = 120

    println("${bibliotecaCentral.nombre}: ${bibliotecaCentral.ejemplaresDisponibles} ejemplares")
    println("${bibliotecaInfantil.nombre}: ${bibliotecaInfantil.ejemplaresDisponibles} ejemplares")

    val lector1 = Lector("Ana", 1)
    val lector2 = Lector("Carlos", 2)

    lector1.consultarCatalogo()
    lector2.consultarCatalogo()
    lector1.puedeSolicitarPrestamo()

    println(lector1.nombre)
    println(lector2.nombre)
}