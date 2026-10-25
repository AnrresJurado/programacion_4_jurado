import { View, Text, StyleSheet } from "react-native"

type EstadoLibro = 'disponible' | 'prestado' | 'reservado' | 'retrasado' | 'mantenimiento'

interface BadgeEstadoProps {
  estado: EstadoLibro
  tamaño?: number          // opcional — valor por defecto: 12
  mostrarIcono?: boolean   // opcional — valor por defecto: false
}

const COLOR_ESTADO: Record<EstadoLibro, { fondo: string; texto: string }> = {
  disponible:    { fondo: '#e8f5e9', texto: '#2e7d32' },
  prestado:      { fondo: '#e3f2fd', texto: '#1565c0' },
  reservado:     { fondo: '#fff8e1', texto: '#f57f17' },
  retrasado:     { fondo: '#fce4ec', texto: '#c62828' },
  mantenimiento: { fondo: '#f3e5f5', texto: '#7b1fa2' },
}

const ICONO_ESTADO: Record<EstadoLibro, string> = {
  disponible:    '●',
  prestado:      '➔',
  reservado:     '◐',
  retrasado:     '✕',
  mantenimiento: '*',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaLibroProps {
  titulo: string
  isbn: string
  estado: EstadoLibro
  diasRestantes?: number   // días para devolución — opcional
  onPress?: () => void
}

function FilaLibro({ titulo, isbn, estado, diasRestantes }: FilaLibroProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreServidor}>{titulo}</Text>
        <Text style={estilos3.ipTexto}>{isbn}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {diasRestantes !== undefined && (
          <Text style={estilos3.latencia}>{diasRestantes} días rest.</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono tamaño={11} />
      </View>
    </View>
  )
}

export function Paso3_mp() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Inventario de la Biblioteca</Text>
      <FilaLibro titulo="Cien años de soledad"   isbn="ISBN: 978-84-376" estado="disponible"                  />
      <FilaLibro titulo="El principito"         isbn="ISBN: 978-987-566" estado="prestado"     diasRestantes={3}  />
      <FilaLibro titulo="Don Quijote de la Mancha" isbn="ISBN: 978-84-249" estado="reservado"                     />
      <FilaLibro titulo="Rayuela"               isbn="ISBN: 978-84-376-0" estado="retrasado"    diasRestantes={-2} />
      <FilaLibro titulo="Crimen y castigo"      isbn="ISBN: 978-84-206" estado="mantenimiento"                  />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreServidor: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  ipTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  latencia: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})