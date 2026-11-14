// 05_readln_double_mp.kt
fun main(){
    println("Sistema de Gestión de Biblioteca - Registro de Préstamo Especial")
    println("¿Nombre del usuario o investigador?")
    val nombre = readLine()
    
    println("Cantidad de libros solicitados:")
    val portales = readLine()!!.toInt()
    
    println("Costo de inscripción o garantía por libro ($):")
    val costo = readLine()!!.toDouble()
    
    println("Créditos o saldo disponible en la cuenta ($):")
    val creditos = readLine()!!.toDouble()
    
    val costoTotal = portales * costo
    val saldo = creditos - costoTotal
    
    println("Reporte de Transacción")
    println("Usuario: $nombre")
    println("Costo total de la solicitud: $$costoTotal")
    println("Saldo restante en cuenta: $$saldo")
}