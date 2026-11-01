import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaAutor_mp } from './paso1FilaAutor_mp'

export type Autor = {
  id: string
  nombre: string
  nacionalidad: string
  activo: boolean
}

const AUTORES: Autor[] = [
  { id: '1', nombre: 'Gabriel García Márquez', nacionalidad: 'Colombiana', activo: true },
  { id: '2', nombre: 'Jorge Luis Borges', nacionalidad: 'Argentina', activo: true },
  { id: '3', nombre: 'Mario Vargas Llosa', nacionalidad: 'Peruana', activo: true },
]

export function Paso1Autor_mp() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Directorio de Autores</Text>
      <FlatList<Autor>
        data={AUTORES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaAutor_mp autor={item} />}
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