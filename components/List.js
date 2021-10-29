import React from "react";
import { Text, FlatList, StyleSheet, View, Button, Dimensions, ProgressBarAndroidComponent } from "react-native";

export default ({ points, closeModal }) => {
  return(
    <>
      <View style={styles.list}>
        <FlatList 
          data={points.map(n => n.name)} 
          renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.button}>
        <Button title='Close' onPress={closeModal} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15,
  },
  button: {
    paddingBottom: 20
  }
});