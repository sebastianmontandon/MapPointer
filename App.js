import React, { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Map, Popup, Panel } from './components';

export default function App() {
  const [point, setPoints] = useState([])
  const handleOnLongPress = ({ nativeEvent }) => {
    const newPoints = point.concat({coordinate: nativeEvent.coordinate})
    setPoints({ newPoints });
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={ handleOnLongPress }/>
      <Popup />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
