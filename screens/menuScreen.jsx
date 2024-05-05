import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MenuRestaurant from '../components/menuRestaurant';

const menu = require('../menu.json');
const globalStyles = require("../globalStyles.json");

export default function MenuScreen() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <View style={styles.initialGap}/>
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
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: globalStyles.backgroundColor
},
initialGap:{
    height: 100
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
