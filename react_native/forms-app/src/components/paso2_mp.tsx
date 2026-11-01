import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { useState, useCallback } from 'react'
import { Libro, LIBROS } from './paso1_mp'
import { Paso1FilaLibro_mp } from './paso1FilaLibro_mp'
import { Paso2ListaVacia_mp } from './paso2ListaVacia_mp'
import { Paso2Separador_mp } from './paso2Separador_mp'

const PAGINA_2: Libro[] = [
  { id: '9', nombre: 'Rayuela', isbn: '978-8437604947', disponible: true },
  { id: '10', nombre: 'Ensayo sobre la Ceguera', isbn: '978-8497593458', disponible: false },
]

export function Paso2_mp() {
  const [datos, setDatos] = useState<Libro[]>(LIBROS)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(LIBROS)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Biblioteca · p.{paginaActual}</Text>
      <FlatList<Libro>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaLibro_mp libro={item} />}
        ItemSeparatorComponent={Paso2Separador_mp}
        ListEmptyComponent={<Paso2ListaVacia_mp />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : <></>
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})