import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';

export default function MenuRestaurantNew({ restaurant }) {
    const rests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Sample data array

    // Rendering individual item for FlatList
    const renderItem = ({ item }) => (
        <Image 
            source={{uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}}
            style={{width: 300, height: 150, margin: 10}} 
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={rests}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
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
    }
});
