import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
    largeHeading: {
        fontSize: 50,
        fontStyle: 'italic',
    },
    ListContainer: {
        flexGrow: 0,
        flexShrink: 0
    },
    flatList: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        padding: 10,
        marginBottom: 10
    }
});
  
export default styles;  