// app/servidores/[id]_mp.tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams, router } from 'expo-router'

interface DetalleLibro {
  titulo:     string
  isbn:       string
  autor:      string
  editorial:  string
  paginas:    string
  ubicacion:  string
  ejemplares: string
  estado:     string
}

const DB_LIBROS: Record<string, DetalleLibro> = {
  '1': {
    titulo: 'Cien Años de Soledad', isbn: '978-0307474728', autor: 'Gabriel García Márquez',
    editorial: 'Editorial Sudamericana', paginas: '471 páginas',
    ubicacion: 'Estantería A-12 (Literatura)',
    ejemplares: '3 disponibles de 5',
    estado: 'Disponible',
  },
  '2': {
    titulo: 'Don Quijote de la Mancha', isbn: '978-8424116033', autor: 'Miguel de Cervantes',
    editorial: 'Real Academia Española', paginas: '1345 páginas',
    ubicacion: 'Estantería A-01 (Clásicos)',
    ejemplares: '2 disponibles de 2',
    estado: 'Disponible',
  },
  '3': {
    titulo: 'El Principito', isbn: '978-0156013987', autor: 'Antoine de Saint-Exupéry',
    editorial: 'Reynal & Hitchcock', paginas: '96 páginas',
    ubicacion: 'Estantería B-04 (Infantil)',
    ejemplares: '0 disponibles de 4',
    estado: 'Prestado',
  },
}

function FilaDetalle_mp({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export default function DetalleLibroScreen_mp() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const libro = DB_LIBROS[id ?? '']

  if (!libro) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.error}>Libro con ID "{id}" no encontrado</Text>
        <Text style={styles.enlace} onPress={() => router.back()}>
          ← Volver al catálogo
        </Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: libro.titulo }} />

      <View style={styles.encabezado}>
        <Text style={styles.nombreLibro}>{libro.titulo}</Text>
        <Text style={styles.isbnLibro}>ISBN: {libro.isbn}</Text>
        <Text style={styles.autorLibro}>Autor: {libro.autor}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>INFORMACIÓN EDITORIAL</Text>
        <FilaDetalle_mp etiqueta="Editorial"  valor={libro.editorial} />
        <FilaDetalle_mp etiqueta="Extensión"  valor={libro.paginas} />
        <FilaDetalle_mp etiqueta="Ubicación"  valor={libro.ubicacion} />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>DISPONIBILIDAD</Text>
        <FilaDetalle_mp etiqueta="Ejemplares" valor={libro.ejemplares} />
        <FilaDetalle_mp etiqueta="Estado"     valor={libro.estado} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:      { flex: 1, backgroundColor: '#f0f4f8' },
  contenido:   { padding: 16, gap: 16 },
  centrado:    { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  error:       { fontSize: 16, color: '#c62828' },
  enlace:      { fontSize: 14, color: '#1565c0' },
  encabezado: {
    backgroundColor: '#1565c0',
    borderRadius: 12,
    padding: 20,
    gap: 4,
  },
  nombreLibro: { fontSize: 22, fontWeight: '700', color: '#fff' },
  isbnLibro:   { fontSize: 14, color: '#bbdefb', fontFamily: 'monospace' },
  autorLibro:  { fontSize: 13, color: '#90caf9' },
  seccion: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78909c',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  fila:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#546e7a', fontWeight: '500' },
  valor:    { fontSize: 13, color: '#1a1a1a', fontFamily: 'monospace', flexShrink: 1, textAlign: 'right' },
})