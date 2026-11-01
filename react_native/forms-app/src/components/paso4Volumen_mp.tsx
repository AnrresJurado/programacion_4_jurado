import { useRef, useState, type ComponentRef } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

export function Paso4Volumen_mp() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')
  const [password, setPassword] = useState('')
  const [mostrarPass, setMostrarPass] = useState(false)

  const refAltura = useRef<ComponentRef<typeof TextInput> | null>(null)
  const refProfundidad = useRef<ComponentRef<typeof TextInput> | null>(null)
  const refPass = useRef<ComponentRef<typeof TextInput> | null>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Configurar Volumen de Libro</Text>

      {/* Base */}
      <Text style={styles4.etiqueta}>Ingrese el grosor (base): </Text>
      <TextInput
        style={styles4.campo}
        value={base}
        onChangeText={setBase}
        placeholder="ej. 3"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refAltura.current?.focus()}
      />

      {/* Altura */}
      <Text style={styles4.etiqueta}>Ingrese la altura: </Text>
      <TextInput
        ref={refAltura}
        style={styles4.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="21"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refProfundidad.current?.focus()}
      />

      {/* Profundidad */}
      <Text style={styles4.etiqueta}>Ingrese el ancho (profundidad): </Text>
      <TextInput
        ref={refProfundidad}
        style={styles4.campo}
        value={profundidad}
        onChangeText={setProfundidad}
        placeholder="15"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refPass.current?.focus()}
      />

      {/* Contraseña / Clave de inventario */}
      <Text style={styles4.etiqueta}>Clave de Inventario: </Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refPass}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry={!mostrarPass}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarPass((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarPass ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          VOL: {base || '<base>'}x{altura || '<altura>'}x{profundidad || '<prof>'}
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