// 13_listas_mp.kt
fun calcularTotalMultas(multas: List<Int>): Int{
    var total = 0
    for (multa in multas){
        total += multa
        if (multa > 150){
            println("Multa elevada detectada")
        }
    }
    return total
}

fun main(){
    val seccionesBiblioteca = listOf("Literatura", "Ciencia", "Historia")
    var iteracion: Int = 1
    for (seccion in seccionesBiblioteca){
        println("Sección $iteracion : $seccion")
    }
    val multasPendientes = listOf(100, 150, 200, 80, 120)
    val totalMultas = calcularTotalMultas(multasPendientes)
    println("Costo total de multas administradas por Andres Jurado: $totalMultas")
}