import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import GoogleOAuth from '../components/googleOAuth';

const globalStyles = require("../globalStyles.json");

function AccountScreen() {

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <GoogleOAuth />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: globalStyles.backgroundColor,
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
  });

export default AccountScreen;