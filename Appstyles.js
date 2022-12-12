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
    headingColor: {
        ...Platform.select({
            android: {
                color: 'red'
            },
            ios: {
                color: 'pink'
            },
            default: {
                color: 'green'
            }
        })
    }
  });
  
export default styles;  