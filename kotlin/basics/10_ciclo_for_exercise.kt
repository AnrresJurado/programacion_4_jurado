fun main () {
    var presupuestototal = 0.0
    println("Presupuesto de expedicion")
    for (viaje in 1..6) {
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo original $costoOriginal")
        println ("Descuento $descuento")
        println("Costo Final $costoFinal")
        presupuestototal += costoFinal
    }
    println("Prespuesto total de la expedicion %1f creditos".format(presupuestototal))
}