// 12_arreglos_mp.kt
fun main(){
    val prestamosLibros = arrayOf(30, 50, 80, 100, 60)
    println(prestamosLibros[0])
    println(prestamosLibros[2])
    println(prestamosLibros[4])
    prestamosLibros[4] = 150
    println(prestamosLibros[4])
    for (prestamo in prestamosLibros){
        println("Préstamo registrado")
        val prestamoDoble = prestamo * 2
        println("Préstamo duplicado: $prestamoDoble")
        if (prestamoDoble >= 150){
            val prestamoAjustado = prestamoDoble - 70
            println("Préstamo ajustado por límite de estantería: $prestamoAjustado")
        }
    }
}