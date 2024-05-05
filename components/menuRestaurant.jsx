import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import MenuItem from './menuItem';

const menu = require('../menu.json');
const globalStyles = require("../globalStyles.json");

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

    const renderSeparator = () => (
        <View style={styles.itemGap} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator} // Add this line to include gaps
                contentContainerStyle={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',

    },
    menuItem: {
        width: globalStyles.itemImageWidth
    },
    flatList:{
        gap: 20,
        paddingLeft: 20
    },
    itemGap:{
        width: 5
    }
});
