import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: 500,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    image2: {
        marginTop: 0,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        height: Dimensions.get('screen').height - 570,
    },
    title: {
      fontSize: 100,
      fontWeight: 'bold',
      color: 'white',
      width: '100%',
      marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 44,
        zIndex: 100,
        elevation: 3,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    icon: {
        width: 40,
        height: 40,
        marginTop: 5
    },
});

export default styles;