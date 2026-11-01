import { Alert, ScrollView } from 'react-native'
import { useState } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

// Regex ISBN básico (ej. 978-0156013987 o similar)
const REGEX_ISBN = /^(\d{3}-\d{10}|\d{10,13})$/

type CamposFormulario = {
  titulo: string
  isbn: string
  ejemplares: string
}

type ErroresFormulario = {
  titulo: string | null
  isbn: string | null
  ejemplares: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { titulo: null, isbn: null, ejemplares: null }

  if (campos.titulo.trim().length === 0) {
    errores.titulo = 'El título del libro es obligatorio'
  } else if (campos.titulo.trim().length < 2) {
    errores.titulo = 'El título debe tener al menos 2 caracteres'
  }

  if (campos.isbn.trim().length === 0) {
    errores.isbn = 'El ISBN es obligatorio'
  } else if (!REGEX_ISBN.test(campos.isbn.trim())) {
    errores.isbn = 'Formato de ISBN inválido (ej. 978-0156013987)'
  }

  const numEjemplares = Number(campos.ejemplares)
  if (campos.ejemplares.trim().length === 0) {
    errores.ejemplares = 'La cantidad de ejemplares es obligatoria'
  } else if (!Number.isInteger(numEjemplares) || numEjemplares < 1 || numEjemplares > 100) {
    errores.ejemplares = 'Cantidad inválida (1 – 100)'
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

export function Paso5_mp() {
  const [campos, setCampos] = useState<CamposFormulario>({
    titulo: '',
    isbn: '',
    ejemplares: '1',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    titulo: null,
    isbn: null,
    ejemplares: null,
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
    Alert.alert(
      'Libro registrado',
      `${campos.titulo} · ISBN: ${campos.isbn} (Ejemplares: ${campos.ejemplares})`,
      [
        {
          text: 'Registrar otro',
          onPress: () => {
            setCampos({ titulo: '', isbn: '', ejemplares: '1' })
            setErrores({ titulo: null, isbn: null, ejemplares: null })
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
        <Text style={styles5.titulo}>Registrar Obra en Biblioteca</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Título del Libro *" error={errores.titulo}>
          <TextInput
            style={[
              styles5.campo,
              errores.titulo !== null && styles5.campoError,
            ]}
            value={campos.titulo}
            onChangeText={(v) => actualizarCampo('titulo', v)}
            placeholder="ej. Rayuela"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="ISBN *" error={errores.isbn}>
          <TextInput
            style={[
              styles5.campo,
              errores.isbn !== null && styles5.campoError,
            ]}
            value={campos.isbn}
            onChangeText={(v) => actualizarCampo('isbn', v)}
            placeholder="978-8437604947"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Ejemplares *" error={errores.ejemplares}>
          <TextInput
            style={[
              styles5.campo,
              errores.ejemplares !== null && styles5.campoError,
            ]}
            value={campos.ejemplares}
            onChangeText={(v) => actualizarCampo('ejemplares', v)}
            placeholder="1"
            keyboardType="number-pad"
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
            {enviado ? '✓ Registrado' : 'Guardar libro'}
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