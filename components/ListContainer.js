
import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from './ListItem';
import styles from '../Appstyles';

export default function ListContainer() {
const DATA = [
    {
      _id: '1',
      title: 'First Item',
    },
    {
      _id: '2',
      title: 'Second Item',
    },
    {
      _id: '3',
      title: 'Third Item',
    },
  ];


    const renderItem = ({ item }) => (
      <ListItem>{item.title}</ListItem>
    );

    return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.ListContainer}
    />
  );
}

