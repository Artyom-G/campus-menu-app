import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MenuItem from '../components/menuItem';

const menu = require('../menu.json');

export default function MenuScreen() {

    function filter(items, filterFunc){
        
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {menu.restaurants.map((restaurant, indexRes) => {
                    return restaurant.categories.map((category, indexCat) => {
                    return category.items.map((item, indexItem) => {
                        return (
                        <TouchableOpacity key={indexItem} style={styles.menuItem}>
                            <MenuItem
                            name={item.name}
                            restaurant={restaurant.restaurant}
                            category={category.name}
                            price={item.price}
                            picture={item.picture}
                            />
                        </TouchableOpacity>
                        );
                    });
                    });
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
scrollview:{
    gap: 10,
    width: "100%",
    flex: 1,
    
},
  menuItem:{
    
  }
});
