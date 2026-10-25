// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso3Suma_mp() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputNum1Ref = useRef<ComponentRef<typeof TextInput>>(null)
  const inputNum2Ref = useRef<ComponentRef<typeof RNTextInput>>(null)

  const [numero1, setNumero1] = useState<string>('')
  const [numero2, setNumero2] = useState<string>('')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputNum1Ref.current?.focus()
  }, [])

  // ── Uso 2: contador de operaciones silencioso (sin re-render) ───────────
  const intentosSumadosRef = useRef<number>(0)
  const [resultadoSuma, setResultadoSuma] = useState<string>('—')

  function calcularSuma() {
    intentosSumadosRef.current += 1   // muta sin re-render
    const n1 = parseFloat(numero1) || 0
    const n2 = parseFloat(numero2) || 0
    const total = n1 + n2
    
    setResultadoSuma(
      `${n1} + ${n2} = ${total} (Operación #${intentosSumadosRef.current})`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Suma de dos números</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Número 1:</Text>
        <TextInput
          ref={inputNum1Ref}
          style={styles.input}
          value={numero1}
          onChangeText={setNumero1}
          placeholder="6"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => inputNum2Ref.current?.focus()}
        />

        <Text style={styles.etiqueta}>Número 2:</Text>
        <TextInput
          ref={inputNum2Ref}
          style={styles.input}
          value={numero2}
          onChangeText={setNumero2}
          placeholder="8"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={calcularSuma}
      >
        <Text style={styles.textoBoton}>Calcular suma</Text>
      </Pressable>
      
      <Text style={styles.detalle}>SUMA: {resultadoSuma}</Text>
      <Text style={styles.detalle}>
        (los conteos silenciosos no causan re-renders)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#893006',
  },
  latencia: {
    fontSize: 10,
    fontWeight: '600',
    color: '#09e3a5',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  input: {
    fontSize: 13,
    color: '#333',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 4,
    marginBottom: 10,
  },
  formulario: {
    width: '100%',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDetener: {
    backgroundColor: '#de1010',
  },
  textoBoton: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f1ecec',
  },
})