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
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20 // Ensure there's padding to avoid content touching the edges
    },
    image: {
      width: 180, // Adjusted width to match the menuItem width
      height: 100, // Fixed height for images
      marginBottom: 10 // Space between image and text below
    },
    name: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center' // Ensure text is aligned center vertically
    },
    restaurant: {
      justifyContent: 'flex-end',
      width: '100%'
    }
  });
  