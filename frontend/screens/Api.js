import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps'; 

export default function Api({navigation}) {

  const [origin,setOrigin] = React.useState({
    latitude: 20.54715,
    longitude: -100.27390,
  });

  const [destination,setDestination] = React.useState({
    latitude: 20.539519, 
    longitude: -100.285500,
  });

    return (
        <View style={styles.container}>
          <MapView style={styles.mapa}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          >
            <Marker draggable
            coordinate={origin} 
            onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
            /> 
            <Marker draggable
            coordinate={destination}
            onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)} 
            />           
          </MapView>
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapa:{
        width: '100%',
        height: '100%',
      }
    });
    