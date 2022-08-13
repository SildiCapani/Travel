import React from 'react';
import {View,
ImageBackground, 
Text, 
Pressable
} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {

    const navigation = useNavigation();

 return (
    <View style={styles.view}>

        <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name='search' size={25} color={'#f15454'} />
            <Text style={styles.searchButtonText}> Where are you going?</Text> 
         </Pressable>

        <ImageBackground source={require("../../../assets/images/Albania.jpg")} style={styles.image}>

        <Text style={styles.title}>Travel </Text>

        <Pressable style={styles.button}  onPress={() => console.warn('Explore Btn clicked')}>
           <Text style={styles.buttonText}>Explore nearby stays</Text>
         </Pressable>         
        </ImageBackground>
        <ImageBackground source={require("../../../assets/images/logo.jpg")} style={styles.image2}>


        </ImageBackground>
    </View>
);};
export default HomeScreen;
