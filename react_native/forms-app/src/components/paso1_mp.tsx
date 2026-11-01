import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaLibro_mp } from './paso1FilaLibro_mp'

export type Libro = {
  id: string
  titulo: string
  isbn: string
  disponible: boolean
}

export const LIBROS: Libro[] = [
  { id: '1', titulo: 'Cien Años de Soledad', isbn: '978-0307474728', disponible: true },
  { id: '2', titulo: 'Don Quijote de la Mancha', isbn: '978-8424116033', disponible: true },
  { id: '3', titulo: 'El Principito', isbn: '978-0156013987', disponible: true },
  { id: '4', titulo: 'Rayuela', isbn: '978-8437604947', disponible: false },
  { id: '5', titulo: 'Pedro Páramo', isbn: '978-8437604183', disponible: true },
  { id: '6', titulo: 'Ficciones', isbn: '978-8420633121', disponible: false },
  { id: '7', titulo: 'La Ciudad y los Perros', isbn: '978-8437602332', disponible: true },
  { id: '8', titulo: 'El Aleph', isbn: '978-8420633114', disponible: true },
]

export function Paso1_mp() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Catálogo de Libros</Text>
      <FlatList<Libro>
        data={LIBROS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaLibro_mp libro={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})