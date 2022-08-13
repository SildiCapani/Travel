import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import SearchResults from '../../../assets/data/search';


const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
           {/* Inpun Component */}
            <TextInput 
            style={styles.textInput}
            placeholder="Where are you going?"
            value={inputText}
            onChange={setInputText}
            />

           {/* List */}
            <FlatList 
            data={SearchResults}
            renderItem={({item}) => (
            <Pressable style={styles.row} onPress={() => navigation.navigate("Guests")}>
                <View style={styles.iconContainer}>
                    <Entypo name={"location-pin"} size={25} color={'black'} />
                </View>
                <Text style={styles.locationText }>{item.description}</Text>
            </Pressable>)}
            />
        </View>
    );
};

 export default DestinationSearchScreen;