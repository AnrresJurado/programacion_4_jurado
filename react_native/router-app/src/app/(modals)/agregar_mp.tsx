// app/(modals)/agregar_mp.tsx
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'

export default function ModalAgregarLibro_mp() {
  const [titulo, setTitulo] = useState('')
  const [isbn,   setIsbn]   = useState('')

  function guardar() {
    if (!titulo.trim() || !isbn.trim()) return
    console.log('Nuevo libro registrado:', { titulo, isbn })
    router.back()   // Cierra el modal
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.instruccion}>
        Ingresa los datos del nuevo libro para el catálogo de la biblioteca.
      </Text>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Título de la obra</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="ej. Cien Años de Soledad"
          placeholderTextColor="#90a4ae"
          autoCapitalize="words"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Código ISBN</Text>
        <TextInput
          style={styles.input}
          value={isbn}
          onChangeText={setIsbn}
          placeholder="ej. 978-0307474728"
          placeholderTextColor="#90a4ae"
          keyboardType="decimal-pad"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar libro</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#263238',
    padding: 24,
    gap: 20,
  },
  instruccion: { fontSize: 14, color: '#90a4ae', lineHeight: 20 },
  grupo:       { gap: 6 },
  etiqueta:    { fontSize: 13, color: '#b0bec5', fontWeight: '500' },
  input: {
    backgroundColor: '#37474f',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#eceff1',
    fontFamily: 'monospace',
    borderWidth: 1,
    borderColor: '#546e7a',
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#0d47a1' },
  botonTexto:      { color: '#fff', fontWeight: '700', fontSize: 16 },
  cancelar:        { textAlign: 'center', color: '#78909c', fontSize: 14, padding: 8 },
})