import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import {
  UsuarioProvider,
  useUsuario,
} from '../context/UsuarioContext';

// Componente que consume el contexto
function Perfil() {
  const { usuario, setUsuario, cargo, setCargo } = useUsuario();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.texto}>
          Hola, {usuario}
        </Text>

        <Button
          title="Cambiar usuario"
          onPress={() => setUsuario('Homero Simpson')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.texto}>
          Cargo: {cargo}
        </Text>

        <Button
          title="Cambiar cargo"
          onPress={() => setCargo('Jefe de Sector')}
        />
      </View>
    </View>
  );
}

// Componente principal
export default function Paso5() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 30,
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 10,
  },
});