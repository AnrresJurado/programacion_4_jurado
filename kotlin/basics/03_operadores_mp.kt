// operadores_mp.kt
fun main() {
    println("Sistema de Gestión de Biblioteca - Operadores")
    println("Operadores Aritméticos (Cálculos de multas y stock)")
    
    var librosDisponibles: Double = 10.50 // Representando lotes o peso promedio en kg
    var librosPrestados: Double = 5.50
    var totalLibros: Double = librosDisponibles + librosPrestados
    
    println("Suma + : $librosDisponibles + $librosPrestados = ${librosDisponibles + librosPrestados}")
    println("Suma total de inventario: $totalLibros")
    println("Resta - : $librosDisponibles - $librosPrestados = ${librosDisponibles - librosPrestados}")
    println("Multiplicación * : $librosDisponibles * $librosPrestados = ${librosDisponibles * librosPrestados}")
    println("División / : $librosDisponibles / $librosPrestados = ${librosDisponibles / librosPrestados}")
    println("Residuos % : $librosDisponibles % $librosPrestados = ${librosDisponibles % librosPrestados}")
    
    println("\nPrioridades de los operadores aritméticos en el sistema")
    println("1 ()")
    println("2 *, /, %")
    println("3 +, -")
    
    val ejemplaresTotales = 10 + 3 * 5 + 5
    println("Ejemplares totales calculados en estantería: $ejemplaresTotales")
    
    val distribucionSeccion = 3 / 5 * 5
    println("Distribución de libros por pasillo: $distribucionSeccion")
    
    println("\nOperadores de Comparación (Validaciones de Préstamos)")
    println("Stock igual al límite (10 == 10): ${10 == 10}")
    println("Stock igual al límite (10 == 11): ${10 == 11}")
    println("Diferente de ID de categoría (5 != 10): ${5 != 10}")
    println("Diferente de ID de categoría (10 != 10): ${10 != 10}")
    println("¿Días de retraso mayores a 10? (5 > 10): ${5 > 10}")
    println("¿Días de retraso mayores a 10? (15 > 10): ${15 > 10}")
    println("¿Stock menor al mínimo? (5 < 10): ${5 < 10}")
    println("¿Stock menor al mínimo? (15 < 10): ${15 < 10}")
    println("¿Multa mayor o igual a base? (10 >= 10): ${10 >= 10}")
    println("¿Multa mayor o igual a base? (15 >= 10): ${15 >= 10}")
    println("¿Multa mayor o igual a base? (5 >= 10): ${5 >= 10}")
    println("¿Capacidad menor o igual permitida? (10 <= 10): ${10 <= 10}")
    println("¿Capacidad menor o igual permitida? (15 <= 10): ${15 <= 10}")
    println("¿Capacidad menor o igual permitida? (5 <= 10): ${5 <= 10}")
}