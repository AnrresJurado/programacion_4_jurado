import { SectionList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Libro } from './paso1_mp'
import { Paso1FilaLibro_mp } from './paso1FilaLibro_mp'
import { Paso3EncabezadoSeccion_mp } from './paso3EncabezadoSeccion_mp'

type SeccionBiblioteca = {
  title: string
  codigoArea: string
  data: Libro[]
}

const SECCIONES: SeccionBiblioteca[] = [
  {
    title: 'Literatura Hispanoamericana',
    codigoArea: 'SEC-LIT-01',
    data: [
      { id: 'l1', titulo: 'Cien Años de Soledad', isbn: '978-0307474728', disponible: true },
      { id: 'l2', titulo: 'Pedro Páramo',          isbn: '978-8437604183', disponible: true },
      { id: 'l3', titulo: 'Rayuela',              isbn: '978-8437604947', disponible: false },
    ],
  },
  {
    title: 'Ciencia y Tecnología',
    codigoArea: 'SEC-TEC-02',
    data: [
      { id: 'l4', titulo: 'Clean Code',           isbn: '978-0132350884', disponible: true },
      { id: 'l5', titulo: 'Structure and Interpretation', isbn: '978-0262510875', disponible: false },
    ],
  },
  {
    title: 'Filosofía y Historia',
    codigoArea: 'SEC-HIS-03',
    data: [
      { id: 'l6', titulo: 'Sapiens',              isbn: '978-0062316097', disponible: true },
      { id: 'l7', titulo: 'El Político',          isbn: '978-8420684123', disponible: false },
      { id: 'l8', titulo: 'Meditaciones',         isbn: '978-8424938369', disponible: true },
    ],
  },
]

export function Paso3_mp() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Secciones de Biblioteca</Text>
      <SectionList<Libro, SeccionBiblioteca>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaLibro_mp libro={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion_mp titulo={section.title} region={section.codigoArea} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})