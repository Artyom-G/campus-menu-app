import { StyleSheet, Text, View, Image } from 'react-native';

export default function MenuItem({name, restaurant, category, price, picture}) {
  return (
    <View style={styles.container}>
        <Image source={{uri:picture,}} style={styles.image}></Image>
        <View style={styles.restaurant}>
            <Text>{restaurant}</Text>
        </View>
        <View style={styles.name}>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
        
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
  image:{
    width:400,
    height: 200
  },
  name:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    height: '100%'
  },
  restaurant:{
    width: '100%',
    justifyContent: 'right'
  }
});
