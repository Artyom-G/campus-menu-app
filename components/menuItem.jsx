import { StyleSheet, Text, View, Image } from 'react-native';

const globalStyles = require("../globalStyles.json");

export default function MenuItem({name, restaurant, category, price, picture}) {
  return (
    <View style={styles.container}>
        <Image source={{uri:picture,}} style={styles.image}></Image>
        <View style={styles.tags}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>${price}</Text>
        </View>
        
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20 
    },
    image: {
      width: globalStyles.itemImageWidth, 
      height: globalStyles.itemImageHeight, 
      marginBottom: 10 
    },
    tags: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'   
    },
    name:{
      color:globalStyles.primaryYellowColor,
      fontSize: globalStyles.itemFontSize
    }
  });
  