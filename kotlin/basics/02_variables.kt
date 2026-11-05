const val MAX_PORTALES = 10

fun main() {
    var energia = 100
    println(energia)
    println("Autor: Andres Jurado")
    energia = 80
    println("Energia: $energia") 
    
    println("Tipos de variables en Kotlin")
    println("Tipos Int o entero")
    var edad: Int = 14
    var portales: Int = 10
    println("edad: $edad")
    println("portales: $portales")
    
    println("Tipo Long")
    var particulas: Long = 90000L
    println("Particulas: $particulas")
    
    println("Tipo Float")
    var combustible: Float = 45.5f
    println("Combustible: $combustible")
    
    println("Tipo Double")
    var distancia: Double = 1250.55
    println("Distancia: $distancia")
    
    println("Tipo Char")
    var codigo: Char = 'c'
    println("Codigo: $codigo")
    
    println("Tipo String")
    var nombre: String = "Morty Smith"
    var dimension: String = "C-134"
    println("Nombre: $nombre, dimension: $dimension")
    
    println("Tipo Boolean")
    var portalActivo: Boolean = true
    println("portalActivo: $portalActivo")

    println("VAL CONST VAR")
    val cientifico = "Rick Sanchez"
    var portalesDisponibles = 5
    println("Nombre del cientifico: $cientifico")
    println("Portales disponible: $portalesDisponibles")
    println("Constante limite: $MAX_PORTALES")
}