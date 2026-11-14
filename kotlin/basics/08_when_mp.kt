// 08_when_mp.kt
fun main(){
    val seccionBiblioteca = 2
    when(seccionBiblioteca){
        1 -> println("Sección: Literatura y Novelas")
        2 -> println("Sección: Ciencia y Tecnología")
        3 -> println("Sección: Historia y Filosofía")
        else -> println("Sección no disponible en el mapa")
    }

    print("Incluya el día de la semana (1-7): ")
    val dia = readln().toInt()
    when(dia){
        1, 2, 3, 4, 5 -> println("Día hábil de atención y préstamos")
        6, 7 -> println("Fin de semana: Biblioteca cerrada al público")
        else -> println("Día inválido")
    }

    print("Ingrese el nivel de inventario o stock del libro: ")
    val stock = readln().toInt()
    when(stock){
        in 0..39 -> println("Stock bajo: Alerta de reabastecimiento")
        in 40..79 -> println("Stock medio: Niveles estables")
        in 80..100 -> println("Stock alto: Ejemplares suficientes")
        else -> println("Valor de stock fuera de rango")
    }

    // Trabajo con when
    val stockDisponible = 80
    val pasilloActivo = true
    val librosSolicitados = 40
    /*
    Trabajo con condicionales y comentarios
    con when en la gestión de biblioteca
    */
    when {
        stockDisponible >= librosSolicitados && pasilloActivo -> {
            val restante = stockDisponible - librosSolicitados
            println("Préstamo Autorizado")
            println("Stock Restante en Estantería: $restante")
        }
        stockDisponible < librosSolicitados && pasilloActivo -> {
            println("Stock Insuficiente para la solicitud")
        }
        !pasilloActivo -> {
            println("El pasillo se encuentra en mantenimiento temporal")
        }
    }
}