import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import DestinationSearchScreen from "../screens/DestinationSearch";

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { View, Image } from 'react-native';
import styles from '../screens/Home/styles';


const Tab = createBottomTabNavigator();

const HometabNavigator = (props) => {

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454'
        }}>
            
        <Tab.Screen
            name={'Explore'}
            component={DestinationSearchScreen}
            options={{
            tabBarStyle: [{
                display: "flex"
            }],
            tabBarIcon: ({color}) => (
                <Fontisto name="search" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name={'Saved'}
            component={SearchResultsScreen}
            options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <FontAwesome name="heart-o" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name={'Travl'}
            component={HomeScreen}
            options={{
            headerShown: false,
            tabBarIcon: ({}) => (
                <Image source={require("../../assets/images/icon2.png")} name="airbnb" style={styles.icon} />
                // <FontAwesome name="heart-o" size={25}  />
                ),
            }}
        />
        <Tab.Screen
            name={'Messages'}
            component={HomeScreen}
            options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <Feather name="message-square" size={25} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name={'profile'}
            component={HomeScreen}
            options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={30} color={color} />
                ),
            }}
        />


        </Tab.Navigator>
    );
};

export default HometabNavigator;