// app/(tabs)/index_mp.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function TabInicioLibros_mp() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Gestión de Biblioteca' }} />
      <Text style={styles.titulo}>Resumen de Biblioteca</Text>
      <Text style={styles.dato}>1,240 libros registrados</Text>
      <Text style={styles.dato}>3 préstamos vencidos</Text>
      <Text style={styles.dato}>Disponibilidad general: 94.5 %</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  dato:   { fontSize: 15, color: '#37474f' },
})