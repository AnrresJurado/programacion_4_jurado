// components/paso3_2_mp.tsx
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type LibroItem = {
  id: string
  titulo: string
  isbn: string
  estado: 'disponible' | 'prestado' | 'mantenimiento'
  progresoLectura: number
}

const LIBROS_DASHBOARD: LibroItem[] = [
  { id: '1', titulo: 'Cien Años de Soledad', isbn: '978-030747', estado: 'disponible',    progresoLectura: 100 },
  { id: '2', titulo: 'Don Quijote',          isbn: '978-8424116', estado: 'disponible',    progresoLectura: 100 },
  { id: '3', titulo: 'Rayuela',              isbn: '978-8437604', estado: 'prestado',      progresoLectura: 45  },
  { id: '4', titulo: 'El Principito',        isbn: '978-0156013', estado: 'disponible',    progresoLectura: 100 },
  { id: '5', titulo: 'Ficciones',            isbn: '978-8420633', estado: 'mantenimiento', progresoLectura: 10  },
  { id: '6', titulo: 'Pedro Páramo',         isbn: '978-8437604', estado: 'prestado',      progresoLectura: 80  },
]

const COLOR_ESTADO: Record<LibroItem['estado'], string> = {
  disponible:    '#2e7d32',
  prestado:      '#e65100',
  mantenimiento: '#6b7280',
}

export function Paso3_2_mp() {
  const { width } = useWindowDimensions()

  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Catálogo General · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {LIBROS_DASHBOARD.map((libro) => (
          <TarjetaLibro_mp
            key={libro.id}
            libro={libro}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaLibro_mp({
  libro,
  ancho,
}: {
  libro: LibroItem
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[libro.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreLibro} numberOfLines={1}>
        {libro.titulo}
      </Text>
      <Text style={estilosPaso3.isbn}>ISBN: {libro.isbn}</Text>

      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${libro.progresoLectura}%`,
              backgroundColor: libro.estado === 'prestado' ? '#e65100' : '#1565c0',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.progreso}>Estado: {libro.estado}</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreLibro: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
  isbn:        { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  progreso:     { fontSize: 11, color: '#6b7280' },
})