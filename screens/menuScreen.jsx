import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MenuItem from '../components/menuItem';

const menu = require('../menu.json');

export default function MenuScreen() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  menuItem:{
    
  }
});
