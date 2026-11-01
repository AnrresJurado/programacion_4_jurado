// app/(tabs)/ajustes_mp.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function TabAjustesBiblioteca_mp() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Ajustes de Biblioteca' }} />
      <Text style={styles.titulo}>Configuración del Sistema</Text>
      <Text style={styles.item}>Plazo máximo de préstamo: 14 días</Text>
      <Text style={styles.item}>Notificaciones automáticas: activas</Text>
      <Text style={styles.item}>Multa diaria por retraso: $0.50</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 24,
    gap: 16,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  item:   { fontSize: 15, color: '#37474f' },
})