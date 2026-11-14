// 09_ciclo_for_mp.kt
data class LectorFiel(
    val puntos: Int,
    val activo: Boolean
)

fun main(){
    for (i in 1..5){
        println("Revisando estantería de libros #$i")
    }

    for (i in 10 downTo(5)){
        println("Control de inventario en pasillo inversor $i")
    }

    for (i in 1..20 step 2){
        println("Asignando código de barras correlativo: $i")
    }

    for (i in 1..10){
        val resultado = 3 * i
        println("Cálculo de multa por 3 días de retraso * $i libros = $$resultado")
    }
}