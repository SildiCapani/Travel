import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View, Text, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import styles from "./styles";

const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();

    
    return(
    <View style={{ justifyContent: 'space-between', height: '100%' }}>
        <View>
            {/* Row 1: Adults  */}
            <View style={styles.row}>

            {/* Titles */}

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18,color: 'black' }}>Adults</Text>
                <Text>Ages 13 or above</Text>
            </View>

            {/* Buttons with value */}

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {/* - */}

                <Pressable onPress={() => setAdults( Math.max( 0, adults - 1))} style={styles.button}>
                  <Text style={{ color: '#474747', fontSize: 20, }}>-</Text>  
                </Pressable>
                {/* valeu */}

                <Text style={{ marginHorizontal: 20, fontSize: 18, color: 'black' }}>{adults}</Text>
                {/* + */}

                <Pressable onPress={() => setAdults(adults + 1)} style={styles.button}>
                    <Text style={{ color: '#474747', fontSize: 20,}}>+</Text>
                </Pressable>
            </View>
            </View>
            {/* Row 2: Children */}
            <View style={styles.row}>

                {/* Titles */}

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18,color: 'black' }}>Children</Text>
                    <Text>Ages 2 - 12</Text>
                </View>

                {/* Buttons with value */}

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    {/* - */}

                    <Pressable onPress={() => setChildren( Math.max( 0, children - 1))} style={styles.button}>
                    <Text style={{ color: '#474747', fontSize: 20, }}>-</Text>  
                    </Pressable>
                    {/* valeu */}

                    <Text style={{ marginHorizontal: 20, fontSize: 18, color: 'black' }}>{children}</Text>
                    {/* + */}

                    <Pressable onPress={() => setChildren(children + 1)} style={styles.button}>
                        <Text style={{ color: '#474747', fontSize: 20,}}>+</Text>
                    </Pressable>
                </View>
            </View>
            {/* Row 3: Infants */}
            <View style={styles.row}>

                {/* Titles */}

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18,color: 'black' }}>Infants</Text>
                    <Text>Under 2</Text>
                </View>

                {/* Buttons with value */}

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    {/* - */}

                    <Pressable onPress={() => setInfants( Math.max( 0, infants - 1))} style={styles.button}>
                    <Text style={{ color: '#474747', fontSize: 20, }}>-</Text>  
                    </Pressable>
                    {/* valeu */}

                    <Text style={{ marginHorizontal: 20, fontSize: 18, color: 'black' }}>{infants}</Text>
                    {/* + */}

                    <Pressable onPress={() => setInfants(infants + 1)} style={styles.button}>
                        <Text style={{ color: '#474747', fontSize: 20,}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>

       
            <Pressable onPress={() => navigation.navigate("Explore")}
                style={{marginBottom: 20, 
                backgroundColor: '#f15454',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                }} >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Search</Text>
            </Pressable>
        
    </View>
    );
};

export default GuestsScreen;