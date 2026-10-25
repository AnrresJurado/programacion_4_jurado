// app/index.tsx — agrega al archivo existente
import { useState } from "react"
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from "react-native"
import { BadgeEstado } from "./paso3"
import { Card, FilaInfo } from "./paso2"
import { ModalConfirm } from "./paso5"
// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6_mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} aplicado a Cien años de soledad`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Cien años de soledad</Text>
          <Text style={estilos6.cabIp}>ISBN: 978-84-376 · Gabriel García Márquez</Text>
        </View>
        <BadgeEstado estado="disponible" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Métricas del ejemplar" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="Préstamos" valor="92% · Alta demanda" />
          <FilaInfo etiqueta="Desgaste" valor="65% · Estado regular" />
          <FilaInfo etiqueta="Inventario" valor="3 / 5 copias (60%)" />
          <FilaInfo etiqueta="Rotación" valor="14.4 días prom. · 3.1 días reserva" />
          <FilaInfo etiqueta="Antigüedad" valor="59 años, 6 meses" />
        </Card>

        {/* Card de configuración */}
        <Card titulo="Detalles de catalogación">
          <FilaInfo etiqueta="Ubicación" valor="Estante 3 · Pasillo A" />
          <FilaInfo etiqueta="Sección" valor="Literatura Latinoamericana" />
          <FilaInfo etiqueta="Clasificación" valor="Dewey 863 · 3 copias" />
          <FilaInfo etiqueta="Formato" valor="Tapa dura · Edición conmemorativa" />
          <FilaInfo etiqueta="Adquisición" valor="Donación institucional" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Prestar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Préstamo de ejemplar')}
            />
            <BotonAccion
              etiqueta="Dar de baja"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Baja por daño')}
            />
            <BotonAccion
              etiqueta="Reservar"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Reserva de libro')}
            />
            <BotonAccion
              etiqueta="Ver historial"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Consulta de historial')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" para Cien años de soledad?\nEsta acción afectará el inventario.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})