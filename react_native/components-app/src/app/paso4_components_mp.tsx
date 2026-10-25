// app/index.tsx — agrega al archivo existente
import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const LIBROS_DEMO = [
  { id: '1',  titulo: 'Cien años de soledad',       isbn: '978-84-376', autor: 'Gabriel García Márquez', prestamo: 92, desgaste: 65 },
  { id: '2',  titulo: 'Don Quijote de la Mancha',   isbn: '978-84-249', autor: 'Miguel de Cervantes',     prestamo: 85, desgaste: 78 },
  { id: '3',  titulo: 'El principito',              isbn: '978-987-566',autor: 'Antoine de Saint-Exupéry',prestamo: 95, desgaste: 88 },
  { id: '4',  titulo: 'Rayuela',                    isbn: '978-84-376-0',autor: 'Julio Cortázar',         prestamo: 60, desgaste: 45 },
  { id: '5',  titulo: 'Crimen y castigo',           isbn: '978-84-206', autor: 'Fiódor Dostoyevski',      prestamo: 74, desgaste: 50 },
  { id: '6',  titulo: 'La metamorfosis',            isbn: '978-84-206-1',autor: 'Franz Kafka',            prestamo: 88, desgaste: 70 },
  { id: '7',  titulo: 'Ficciones',                  isbn: '978-950-040',autor: 'Jorge Luis Borges',       prestamo: 55, desgaste: 30 },
  { id: '8',  titulo: 'Pedro Páramo',               isbn: '978-968-160',autor: 'Juan Rulfo',              prestamo: 68, desgaste: 42 },
  { id: '9',  titulo: 'Aura',                       isbn: '978-968-402',autor: 'Carlos Fuentes',          prestamo: 45, desgaste: 25 },
  { id: '10', titulo: 'La ciudad y los perros',     isbn: '978-84-663', autor: 'Mario Vargas Llosa',      prestamo: 79, desgaste: 62 },
  { id: '11', titulo: '1984',                       isbn: '978-045-152',autor: 'George Orwell',          prestamo: 98, desgaste: 90 },
  { id: '12', titulo: 'Fahrenheit 451',             isbn: '978-145-167',autor: 'Ray Bradbury',           prestamo: 82, desgaste: 75 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaLibro({ titulo, isbn, autor, prestamo, desgaste }: typeof LIBROS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{titulo}</Text>
        <Text style={estilos4.nodoIp}>{isbn}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{autor}</Text>
      <BarraUso porcentaje={prestamo} etiqueta="Prest." />
      <BarraUso porcentaje={desgaste} etiqueta="Desg." />
    </View>
  )
}

export function Paso4_mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Catálogo de la Biblioteca</Text>
        <Text style={estilos4.headerSub}>{LIBROS_DEMO.length} libros registrados</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {LIBROS_DEMO.map((libro) => (
          <TarjetaLibro key={libro.id} {...libro} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})