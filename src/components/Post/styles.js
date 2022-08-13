import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#D3D3D3",
        borderRadius: 7,
        padding: 14,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: "cover",
        borderRadius: 10,
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
        fontSize: 12,
    },
    description: {
        fontSize: 17,
        lineHeight: 24,
        

    },
    prices: {
        fontSize: 18,
       
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',

    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        
        textDecorationLine: 'underline',
    },
})

export default styles