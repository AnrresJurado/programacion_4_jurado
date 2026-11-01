import { Alert, ScrollView } from 'react-native'
import { useState } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

type CamposFormulario = {
  base: string
  altura: string
  profundidad: string
}

type ErroresFormulario = {
  base: string | null
  altura: string | null
  profundidad: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { base: null, altura: null, profundidad: null }

  const b = Number(campos.base)
  if (campos.base.trim().length === 0 || isNaN(b) || b <= 0) {
    errores.base = 'La base es obligatoria y debe ser mayor a 0'
  }

  const a = Number(campos.altura)
  if (campos.altura.trim().length === 0 || isNaN(a) || a <= 0) {
    errores.altura = 'La altura es obligatoria y debe ser mayor a 0'
  }

  const p = Number(campos.profundidad)
  if (campos.profundidad.trim().length === 0 || isNaN(p) || p <= 0) {
    errores.profundidad = 'La profundidad es obligatoria y debe ser mayor a 0'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5Volumen_mp() {
  const [campos, setCampos] = useState<CamposFormulario>({
    base: '',
    altura: '',
    profundidad: '',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    base: null,
    altura: null,
    profundidad: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    const volumenCalculado = Number(campos.base) * Number(campos.altura) * Number(campos.profundidad)
    Alert.alert(
      'Volumen Calculado',
      `Dimensiones: ${campos.base} x ${campos.altura} x ${campos.profundidad}\nVolumen Total: ${volumenCalculado} cm³`,
      [
        {
          text: 'Calcular otro',
          onPress: () => {
            setCampos({ base: '', altura: '', profundidad: '' })
            setErrores({ base: null, altura: null, profundidad: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Calcular Volumen de Libro</Text>
        <Text style={styles5.subtitulo}>
          Ingrese las dimensiones físicas en centímetros
        </Text>

        <CampoConError etiqueta="Grosor / Base (cm) *" error={errores.base}>
          <TextInput
            style={[
              styles5.campo,
              errores.base !== null && styles5.campoError,
            ]}
            value={campos.base}
            onChangeText={(v) => actualizarCampo('base', v)}
            placeholder="ej. 3"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Altura (cm) *" error={errores.altura}>
          <TextInput
            style={[
              styles5.campo,
              errores.altura !== null && styles5.campoError,
            ]}
            value={campos.altura}
            onChangeText={(v) => actualizarCampo('altura', v)}
            placeholder="23"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Ancho / Profundidad (cm) *" error={errores.profundidad}>
          <TextInput
            style={[
              styles5.campo,
              errores.profundidad !== null && styles5.campoError,
            ]}
            value={campos.profundidad}
            onChangeText={(v) => actualizarCampo('profundidad', v)}
            placeholder="15"
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Calculado' : 'Calcular Volumen'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})