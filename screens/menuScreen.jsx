import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MenuItem from '../components/menuItem';
import MenuRestaurant from '../components/menuRestaurant';

const menu = require('../menu.json');

export default function MenuScreen() {

    function filter(items, filterFunc){
        
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {menu.restaurants.map((restaurant, indexRes) => {
                    return(
                        <MenuRestaurant key={indexRes} restaurant={restaurant}></MenuRestaurant>
                    ) 
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'flex-start'
},
scrollview:{
    gap: 1,
    width: "100%",
    flex: 1,
    height: "100%"
},
  menuItem:{
    
  }
});
