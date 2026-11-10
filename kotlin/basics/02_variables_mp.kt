// variables_mp.kt
const val MAX_LIBROS = 50

fun main() {
    var librosPrestados = 10
    println(librosPrestados)
    println("Autor: Andres Jurado")
    librosPrestados = 8
    println("Libros prestados actualizados: $librosPrestados") 
    
    println("Tipos de variables en Kotlin - Gestión de Biblioteca")
    println("Tipos Int o entero")
    var diasPrestamo: Int = 14
    var estanterias: Int = 10
    println("Días de préstamo: $diasPrestamo")
    println("Estanterías: $estanterias")
    
    println("Tipo Long")
    var codigosBarras: Long = 90000L
    println("Códigos de barras totales: $codigosBarras")
    
    println("Tipo Float")
    var multaPendiente: Float = 45.5f
    println("Multa pendiente: $$multaPendiente")
    
    println("Tipo Double")
    var presupuestoAnual: Double = 1250.55
    println("Presupuesto anual: $$presupuestoAnual")
    
    println("Tipo Char")
    var seccionCategoria: Char = 'C'
    println("Sección de categoría: $seccionCategoria")
    
    println("Tipo String")
    var nombreBibliotecario: String = "Andrés Jurado"
    var nombreBiblioteca: String = "Biblioteca Central UTE"
    println("Bibliotecario: $nombreBibliotecario, Biblioteca: $nombreBiblioteca")
    
    println("Tipo Boolean")
    var sistemaDisponible: Boolean = true
    println("Sistema de préstamo activo: $sistemaDisponible")

    println("VAL CONST VAR")
    val directorBiblioteca = "Francisco Higuera"
    var ejemplaresDisponibles = 5
    println("Director de la biblioteca: $directorBiblioteca")
    println("Ejemplares disponibles en mostrador: $ejemplaresDisponibles")
    println("Constante límite de libros por usuario: $MAX_LIBROS")
}