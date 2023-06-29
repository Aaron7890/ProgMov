import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BusApp</Text>
      <Text style={styles.subtitulo}>Iniciar Sesion</Text>
      <TextInput placeholder="Correo Electronico" style={styles.TextInput}
      />
      <TextInput placeholder="Contraseña" style={styles.TextInput}
      />
      <Button title="Iniciar sesión" style={styles.boton} onPress={()=>navigation.navigate('Api')} />
      <Button title="¿No tienes cuenta?" style={styles.boton} onPress={()=>navigation.navigate('Registro')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 70,
    color: '#000',
    fontWeight: 'bold',
  },

  subtitulo:{
    fontSize: 20,
    color: 'gray',
  },

  TextInput:{
    padding: 10,
    paddingStart: 30, 
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },

  textito:{
    fontSize: 14,
    color: 'blue',
    marginTop: 20,
  },

  boton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4287f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botontexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Login;