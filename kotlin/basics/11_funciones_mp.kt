// 11_funciones_mp.kt
fun abrirSistemaPrestamo(){
    println("Abriendo sistema de préstamos de la biblioteca")
    println("Conteo regresivo para apertura")
    println("3")
    println("2")
    println("1")
    println("Andres Jurado abrió el sistema de la biblioteca")
}

fun procesarPrestamo(seccion: String, libros: Int, dias: Int){
    println("Procesando préstamo en la sección $seccion")
    val totalDiasMulta = libros * dias
    println("Total de días-libro acumulados: $totalDiasMulta")
}

fun calcularMulta(monto: Double): Double{
    var descuento: Double = 0.0
    if (monto >= 100){
        descuento = monto * 0.15
    }
    return descuento
}

fun calcularStockTotal(stocks: Array<Int>): Int{
    var total: Int = 0
    for (stock in stocks){
        total += stock
        if (stock > 100){
            println("Exceso de stock en estantería: $stock")
        }
    }
    return total
}

fun main(){
    abrirSistemaPrestamo()
    abrirSistemaPrestamo()
    procesarPrestamo("Literatura", 5, 4)
    procesarPrestamo("Ciencias", 4, 7)
    val descuentoCliente = calcularMulta(123.5)
    println("El lector Andres Jurado tiene este descuento en multas: $descuentoCliente")
    val totalStocks = arrayOf(30, 50, 80, 10, 60)
    val sumaStocks = calcularStockTotal(totalStocks)
    println("Stock total acumulado en pasillos: $sumaStocks")
}