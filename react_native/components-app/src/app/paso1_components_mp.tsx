// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'


interface TarjetaServidorProps {
  titulo: string
  autor: string
  descripcion: string
  paginas: number
  region?: string
}

function TarjetaServidor({ titulo, autor, descripcion, paginas, region }: TarjetaServidorProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreServidor}>{titulo}</Text>
      <Text style={styles.datoDireccion}>{autor}:{paginas}</Text>
      <Text style={styles.datoSistema}>{descripcion}</Text>
      <Text style={styles.datoSistema}>{region ?? 'sin región'}</Text>
    </View>
  )
}

export function Paso1_mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de la Biblioteca</Text>
      <TarjetaServidor
        titulo="Cien años de soledad"
        autor="Gabriel García Márquez"
        descripcion="La épica e inolvidable historia de las siete generaciones de la familia Buendía en el mítico pueblo de Macondo."
        paginas={396}
      />
      <TarjetaServidor
        titulo="El principito"
        autor="Antoine de Saint-Exupéry"
        descripcion="Un tierno relato filosófico donde un joven príncipe viaja por el espacio descubriendo la extraña forma en que los adultos ven la vida."
        paginas={96}
        region='northon'
      />
      <TarjetaServidor
        titulo="1984"
        autor="George Orwell"
        descripcion="Una perturbadora novela distópica sobre un régimen totalitario que vigila y controla hasta los pensamientos de sus ciudadanos."
        paginas={328}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreServidor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoDireccion: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoSistema: {
    fontSize: 12,
    color: '#757575',
  },
})