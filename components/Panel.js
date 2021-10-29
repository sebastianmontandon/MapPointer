import React from "react"
import { StyleSheet, Button, View, Dimensions } from "react-native"

export default ({onPressLeft, textLeft, togglePointVisible}) =>{
    return(
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLeft} />
            <Button title='Show/Hide' onPress={togglePointVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})