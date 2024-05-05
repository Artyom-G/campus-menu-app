import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from './screens/menuScreen';
import AccountScreen from './screens/accountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from 'react-native';

const globalStyles = require('./globalStyles.json');
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'MenuScreen') {
              iconName = 'home';
            } else if (route.name === 'AccountScreen') {
              iconName = 'user';
            }
            return <Icon name={iconName} size={globalStyles.bottomBarIconSize} color={focused ? globalStyles.primaryRedColor : globalStyles.primaryInactiveRedColor} />;
          },
          tabBarActiveTintColor: globalStyles.primaryRedColor,
          tabBarInactiveTintColor: globalStyles.primaryRedColor,
          tabBarStyle: {
            backgroundColor: globalStyles.bottomBarBackgroundColor,
            position: 'absolute',
            bottom: 20,
            left: 110,
            right: 110,
            elevation: 0,
            borderRadius: 40,
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            display: 'none',
          },
          headerStyle: {
            backgroundColor: globalStyles.primaryRedColor,
            height: 100,
          },
          headerTitleStyle: {
            color: 'white', 
          },
          headerTitle: (props) => <Text {...props} style={styles.header}>GryphCuisine</Text>, 
        })}
      >

        <Tab.Screen name="MenuScreen" component={MenuScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: globalStyles.bottomBarBackgroundColor
  },
  header:{
    color: globalStyles.headerColor,
    fontSize: globalStyles.headerSize,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});