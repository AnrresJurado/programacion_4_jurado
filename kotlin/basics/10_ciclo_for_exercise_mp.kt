// 10_ciclo_for_exercise_mp.kt
fun main () {
    var presupuestoTotal = 0.0
    println("Presupuesto de adquisición de libros y multas")
    for (lote in 1..6) {
        val costoOriginal = lote * 25.0
        var descuento = 0.0
        if (costoOriginal >= 100.0) {
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Lote de libros $lote")
        println("Costo original: $$costoOriginal")
        println("Descuento aplicado: $$descuento")
        println("Costo Final: $$costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de la gestión: $%.1f créditos".format(presupuestoTotal))
}