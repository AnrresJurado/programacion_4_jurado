// 04_readline_mp.kt
fun main(){
    println("Sistema de Biblioteca - Ingreso de Datos")
    println("¿Cuál es el nombre del usuario?")
    val nombreUsuario = readLine()
    println("Bienvenido al sistema, $nombreUsuario")
    
    println("Libros prestados en la sección A:")
    val librosSeccionA = readLine()!!.toInt()
    
    println("Libros prestados en la sección B:")
    val librosSeccionB = readLine()!!.toInt()
    
    val totalPrestados = librosSeccionA + librosSeccionB
    println("Total de libros prestados: $totalPrestados")
    
    println("\nCalculadora de Inventario")
    println("Stock inicial en bodega:")
    val stockInicial = readLine()!!.toInt()
    
    println("Cantidad de libros retirados para préstamo:")
    val librosRetirados = readLine()!!.toInt()
    
    val stockRestante = stockInicial - librosRetirados
    println("Stock restante en bodega: $stockRestante")
}