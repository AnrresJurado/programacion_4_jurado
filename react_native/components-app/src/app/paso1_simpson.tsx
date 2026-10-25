// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'


interface TarjetaPersonaje {
    nombre: string
    edad: number
    ocupacion: string
    frase: string
}

function TarjetaPersonaje({ nombre, edad, ocupacion, frase}: TarjetaPersonaje) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreServidor}>{nombre}</Text>
      <Text style={styles.datoDireccion}>{edad}</Text>
      <Text style={styles.datoSistema}>{ocupacion}</Text>
      <Text style={styles.datoSistema}>{frase ?? 'sin región'}</Text>
    </View>
  )
}

export function Paso1Simpson() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de servidores</Text>
      <TarjetaPersonaje
        nombre="Homero"
        edad={22}
        ocupacion="Veterinario"
        frase="Hola"
      />
      <TarjetaPersonaje
        nombre="Liza"
        edad={22}
        ocupacion="Instructura"
        frase="Enjoy"
      />
      <TarjetaPersonaje
        nombre="Lizeth"
        edad={22}
        ocupacion="Alpine 3.19"
        frase="Vamos!!!"
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

