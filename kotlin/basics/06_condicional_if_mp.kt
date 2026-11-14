// 06_condicional_if_mp.kt
fun main(){
    println("Sistema de Gestión de Biblioteca - Validaciones")
    println("Condicional Simple o un camino")
    var stockLibros = 80
    if (stockLibros >= 50){
        println("La biblioteca tiene suficientes ejemplares en estantería")
    }
    
    println("Condicional if-else o dos caminos")
    stockLibros = 30
    if (stockLibros >= 50){
        println("La biblioteca tiene suficientes ejemplares en estantería")
    } else {
        println("Stock bajo: Se requiere reabastecer el libro")
    }

    println("Condicional múltiple")
    stockLibros = 70
    if (stockLibros >= 100){
        println("Stock óptimo general")
    } else if (stockLibros >= 50){
        println("Stock moderado y aceptable")
    } else {
        println("Stock crítico: Préstamo restringido")
    }

    println("Condicional enlazada")
    stockLibros = 70
    val pasilloHabilitado = true
    if (stockLibros >= 100){
        println("Stock óptimo general")
        if (pasilloHabilitado){
            println("El pasillo principal está abierto al público")
        }
    } else if (stockLibros >= 50){
        println("Stock moderado y aceptable")
        if (pasilloHabilitado){
            println("El pasillo principal está abierto al público")
        }
    } else {
        println("Stock crítico: Acceso al pasillo restringido")
    }
}