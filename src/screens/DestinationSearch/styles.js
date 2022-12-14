import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textInput: {
        fontSize: 17,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {
        color: 'black',
    },
});

export default styles;