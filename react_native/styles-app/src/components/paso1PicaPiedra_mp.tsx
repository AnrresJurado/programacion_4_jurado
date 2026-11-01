import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1PicaPiedra_2_mp() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna (por defecto) ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexDirection: 'column' (por defecto)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1565c0' }]}>
          <Text style={estilosPaso1.textoCaja}>Cien Años de Soledad</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1565c0' }]}>
          <Text style={estilosPaso1.textoCaja}>Don Quijote</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1565c0' }]}>
          <Text style={estilosPaso1.textoCaja}>El Principito</Text>
        </View>
      </View>

      {/* ── Fila con justifyContent: 'space-between' ───────────── */}
      <Text style={estilosPaso1.etiqueta}>
        flexDirection: 'row' + justifyContent: 'space-between'
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#2e7d32' }]}>
          <Text style={estilosPaso1.textoCaja}>Secciones</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#2e7d32' }]}>
          <Text style={estilosPaso1.textoCaja}>Literatura</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#2e7d32' }]}>
          <Text style={estilosPaso1.textoCaja}>Préstamos</Text>
        </View>
      </View>

      {/* ── flex: 1 proporcional ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#c62828', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Sala de Lectura (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#c62828', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Archivo</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#c62828', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Digital</Text>
        </View>
      </View>

      {/* ── flexWrap + gap ──────────────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexWrap: 'wrap' + gap: 8</Text>
      <View style={estilosPaso1.rejilla}>
        {['Ficción', 'Historia', 'Ciencia', 'Poesía', 'Filosofía', 'Arte'].map((categoria) => (
          <View key={categoria} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{categoria}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f5f7fa' },
  etiqueta:   { fontSize: 12, color: '#6c80aa', fontFamily: 'monospace' },
  columna: {
    flexDirection: 'column',
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#fff', fontWeight: '600', fontSize: 15 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#0d47a1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})