import { StyleSheet, Text, View } from 'react-native'
import { Autor } from './paso1Autor_mp'

export function Paso1FilaAutor_mp({ autor }: { autor: Autor }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{autor.nombre}</Text>
        <Text style={styles1.ip}>{autor.nacionalidad}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          autor.activo ? styles1.estadoActivo : styles1.estadoInactivo,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {autor.activo ? 'ACTIVO' : 'INACTIVO'}
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