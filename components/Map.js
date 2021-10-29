import React from "react"
import MapView, { Marker } from "react-native-maps"
import { StyleSheet, Dimensions } from "react-native"

export default ({ onLongPress, points, pointVisible }) =>{
  return(
    <MapView 
      style={styles.map}
      onLongPress={onLongPress}
    >
      {pointVisible && points.map(m => 
        <Marker 
          key={m.name}
          coordinate={m.coordinate}
          title={m.name}
        />)}
      {/* {console.log(points.map(x => x.coordinate))} */}
    </MapView>
  )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width,
    }
})