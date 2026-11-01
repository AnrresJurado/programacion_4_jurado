// app/(tabs)/_layout_mp.tsx
import { Tabs } from 'expo-router'
import { Text, type TextStyle } from 'react-native'

export default function TabsLayout_mp() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:   '#1565c0',
        tabBarInactiveTintColor: '#90a4ae',
        tabBarStyle:             { backgroundColor: '#ffffff', borderTopColor: '#e0e0e0' },
        headerStyle:             { backgroundColor: '#1565c0' },
        headerTintColor:         '#ffffff',
        headerTitleStyle:        { fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:        'Catálogo',
          tabBarIcon:   ({ color, size }) => (
            <TabIcon_mp nombre="catalogo" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="alertas"
        options={{
          title:      'Préstamos',
          tabBarIcon: ({ color, size }) => (
            <TabIcon_mp nombre="prestamos" color={color} size={size} />
          ),
          tabBarBadge: 3,   // Cantidad de libros vencidos o pendientes
        }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{
          title:      'Ajustes',
          tabBarIcon: ({ color, size }) => (
            <TabIcon_mp nombre="ajustes" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

function TabIcon_mp({ nombre, color, size }: { nombre: string; color: TextStyle['color']; size: number }) {
  const icono: Record<string, string> = {
    catalogo:  '📚',
    prestamos: '📖',
    ajustes:   '⚙',
  }
  return (
    <Text style={{ fontSize: size * 0.8, color }}>{icono[nombre]}</Text>
  )
}