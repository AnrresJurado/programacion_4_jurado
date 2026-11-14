// 07_if_excercise_mp.kt
data class LibroPrestamo(
    val stock: Int,
    val disponible : Boolean
)

data class LectorBiblioteca (
    val nombre: String,
    val puntosConfianza: Int        
)

data class SolicitudPrestamoEspecial(
    val stockEjemplares: Int,
    val pasilloAbierto: Boolean,
    val autorizacionBibliotecario: Boolean
)

fun main () {
    val libro = LibroPrestamo(80, true)
    if (libro.stock >= 50 && libro.disponible) {
        println("Préstamo aprobado: El libro se encuentra disponible para entrega")
    }

    val diasRetrasoMulta = arrayOf(20, 45, 85, 30, 60)

    if (diasRetrasoMulta[2] > 70) {
        println("¡Alerta! El libro registra un retraso crítico superior a 70 días")
    } else {
        println("Retraso moderado dentro de los rangos habituales de revisión")
    }

    val calificacionesLibro = arrayOf(80, 65, 90)
    val sumaCalificaciones = calificacionesLibro[0] + calificacionesLibro[1] + calificacionesLibro[2]
    val promedioCalificacion = sumaCalificaciones / 3.0
    if (promedioCalificacion >= 70) {
        println("El libro cuenta con una excelente valoración en el catálogo")
    } else {
        println("La valoración del libro es baja, requiere revisión editorial")
    }

    val lector = LectorBiblioteca("Carlos Pérez", 65)
    println("Nombre del lector: ${lector.nombre}")
    if (lector.puntosConfianza >= 80) {
        println("Lector con categoría VIP: Acceso ilimitado")
    } else if (lector.puntosConfianza >= 50) {
        println("Lector regular: Estado de cuenta activo")
    } else if (lector.puntosConfianza >= 20) {
        println("Lector con observaciones: Préstamos limitados")
    } else {
        println("Lector suspendido: Estado crítico de multas")
    }

    val solicitud = SolicitudPrestamoEspecial(120, true, false) 

    if (solicitud.stockEjemplares >= 100) {
        if (solicitud.pasilloAbierto) {
            if (solicitud.autorizacionBibliotecario) { 
                println("Préstamo especial autorizado")
            } else {
                println("El usuario no cuenta con la autorización de la jefatura") 
            }
        } else {
            println("El pasillo o estantería se encuentra cerrado temporalmente")
        }
    } else {
        println("Stock insuficiente para préstamo especial")
    }
}