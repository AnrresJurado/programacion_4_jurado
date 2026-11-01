import { StyleSheet, Text, View } from 'react-native'
import { Libro } from './paso1_mp'

export function Paso1FilaLibro_mp({ libro }: { libro: Libro }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{libro.titulo}</Text>
        <Text style={styles1.ip}>ISBN: {libro.isbn}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          libro.disponible ? styles1.estadoActivo : styles1.estadoInactivo,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {libro.disponible ? 'DISPONIBLE' : 'PRESTADO'}
        </Text>
      </View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  ip: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})