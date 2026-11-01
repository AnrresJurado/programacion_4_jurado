import { useRef, useState, type ComponentRef } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

export function Paso4_mp() {
  const [titulo, setTitulo] = useState('')
  const [isbn, setIsbn] = useState('')
  const [estanteria, setEstanteria] = useState('')
  const [codigoSecreto, setCodigoSecreto] = useState('')
  const [mostrarCodigo, setMostrarCodigo] = useState(false)

  const refIsbn = useRef<ComponentRef<typeof TextInput> | null>(null)
  const refEstanteria = useRef<ComponentRef<typeof TextInput> | null>(null)
  const refCodigo = useRef<ComponentRef<typeof TextInput> | null>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Registrar Nuevo Libro</Text>

      {/* Título del Libro */}
      <Text style={styles4.etiqueta}>Título del Libro</Text>
      <TextInput
        style={styles4.campo}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="ej. El Principito"
        autoCapitalize="words"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refIsbn.current?.focus()}
      />

      {/* Código ISBN */}
      <Text style={styles4.etiqueta}>ISBN</Text>
      <TextInput
        ref={refIsbn}
        style={styles4.campo}
        value={isbn}
        onChangeText={setIsbn}
        placeholder="978-0156013987"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refEstanteria.current?.focus()}
      />

      {/* Estantería / Ubicación */}
      <Text style={styles4.etiqueta}>Número de Estantería</Text>
      <TextInput
        ref={refEstanteria}
        style={styles4.campo}
        value={estanteria}
        onChangeText={setEstanteria}
        placeholder="B-12"
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={() => refCodigo.current?.focus()}
      />

      {/* Código de seguridad del ejemplar */}
      <Text style={styles4.etiqueta}>Código de Acceso</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refCodigo}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={codigoSecreto}
          onChangeText={setCodigoSecreto}
          placeholder="••••••••"
          secureTextEntry={!mostrarCodigo}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarCodigo((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarCodigo ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          LIBRO: {titulo || '<Título>'} | ISBN: {isbn || '<ISBN>'} | UBI: EST-{estanteria || 'A1'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})