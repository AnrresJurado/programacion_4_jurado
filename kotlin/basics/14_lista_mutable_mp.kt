// 14_lista_mutable_mp.kt
fun main() {
    val librosBiblioteca = mutableListOf("Literatura", "Ciencia", "Historia")

    var option: Int?
    do {
        println("\nSistema de Biblioteca de Andrés Jurado")
        println("1. Agregar Libro")
        println("2. Mostrar Libros")
        println("3. Modificar Libro")
        println("4. Eliminar Libro")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readln().toIntOrNull()

        when (option) {
            1 -> {
                print("Título del nuevo libro: ")
                val titulo = readln()
                if (titulo.isNotBlank()) {
                    librosBiblioteca.add(titulo)
                    println("Libro incluido en el inventario")
                } else {
                    println("El título no puede estar vacío")
                }
            }
            2 -> {
                println("Catálogo de Libros:")
                for ((i, libro) in librosBiblioteca.withIndex()) {
                    println("[$i] Libro: $libro")
                }
            }
            3 -> {
                println("Actualizar Registro")
                print("Índice del libro a modificar: ")
                val indice = readln().toIntOrNull()
                if (indice != null && indice in librosBiblioteca.indices) {
                    print("Nuevo título: ")
                    val nuevoTitulo = readln()
                    if (nuevoTitulo.isNotBlank()) {
                        librosBiblioteca[indice] = nuevoTitulo
                        println("Libro Actualizado")
                    } else {
                        println("Título no válido")
                    }
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar Registro")
                print("Índice del libro a eliminar: ")
                val indice = readln().toIntOrNull()
                if (indice != null && indice in librosBiblioteca.indices) {
                    librosBiblioteca.removeAt(indice)
                    println("Libro Eliminado del catálogo")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo del sistema de biblioteca...")
            else -> println("Opción no válida")
        }
    } while (option != 5)
}