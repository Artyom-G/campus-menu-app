import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MenuRestaurant from '../components/menuRestaurant';

const menu = require('../menu.json');
const globalStyles = require("../globalStyles.json");

export default function MenuScreen() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {menu.restaurants.map((restaurant, indexRes) => {
                    return(
                        <View key={indexRes} style={styles.restaurantWrapper}>
                            <Text style={styles.restaurant}>{restaurant.restaurant}</Text>
                            <MenuRestaurant restaurant={restaurant}></MenuRestaurant>
                        </View>
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
    flex: 1,
    gap: 100 
},
restaurantWrapper: {
    paddingBottom: 100
},
  restaurant:{
    color: globalStyles.primaryRedColor,
    fontWeight: "bold",
    fontSize: globalStyles.restaurantFontSize,
    paddingLeft: 20
  }
});
