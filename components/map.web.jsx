import MapView from "@teovilla/react-native-web-maps";
import { StyleSheet, Text, View } from 'react-native';

export default function Map() {

  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
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
    map:{
        width: "100%",
        height: "100%"
    }
});
  