import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import MenuItem from './menuItem';

const menu = require('../menu.json');

export default function MenuRestaurant({ restaurant }) {

    const items = restaurant.categories.reduce((allItems, category) => [
        ...allItems,
        ...category.items.map(item => ({
            ...item,
            categoryName: category.name,
            restaurantName: restaurant.restaurant
        }))
    ], []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.menuItem}>
            <MenuItem
                name={item.name}
                restaurant={item.restaurantName}
                category={item.categoryName}
                price={item.price}
                picture={item.picture}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'flex-start',
        height: "100%",
        width: "100%"
    },
    menuItem: {
        height: 250,
        width: 200,
        margin: 10,
    }
});
