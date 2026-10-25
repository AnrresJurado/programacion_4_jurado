// app/index.tsx

import { View, Text, StyleSheet } from "react-native"
import { Paso1 } from "./paso1"
import { Paso2 } from "./paso2"
import { Paso3 } from "./paso3"
import { Paso4 } from "./paso4"
import { Paso5 } from "./paso5"
import { Paso6 } from "./paso6"
import { Paso1Simpson } from "./paso1_simpson"
import { Paso1_mp } from "./paso1_components_mp";
import { Paso2_mp } from "./paso2_components_mp";
import { Paso3_mp } from "./paso3_components_mp"; 
import { Paso4_mp } from "./paso4_components_mp";
import { Paso5_mp } from "./paso5_components_mp"; 
import { Paso6_mp } from "./paso6_components_mp"; 


// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaServidor                     │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │
// │  5  Paso 5  Modal de confirmación                               │
// │  6  Paso 6  Pantalla completa — detalle de servidor             │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 8


export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso1Simpson />
    case 4:
      return <Paso3 />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso1_mp />
    case 9:
      return <Paso2_mp />
    case 10:
      return <Paso3_mp />
    case 11:
      return <Paso4_mp />
    case 12:
      return <Paso5_mp />
    case 13:
      return <Paso6_mp />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

