import React, { useState }  from 'react';
import { StyleSheet, View, Button, Text, FlatList } from 'react-native';
import { Map, Panel, Input, Modal, List } from './components';

export default function App() {
  const [points, setPoints] = useState([])
  const [temporalPoint, setTemporalPoint] = useState({})
  const [name, setName] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_point') //new__point, all__points
  const [pointVisible, setPontVisible] = useState(true)

  const togglePointVisible = () => {setPontVisible(!pointVisible)}

  const handleOnLongPress = ({ nativeEvent }) => {
    setTemporalPoint(nativeEvent.coordinate)
    setVisibility(true)
    setVisibilityFilter('new_point')
    // console.log(points.map(x => x.coordinate))
  }

  const handleChangeText = text => {
    setName(text)
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: temporalPoint, name: name};
    setPoints(points.concat(newPoint))
    setVisibility(false)
    setName('')
  }
  
  const handleCancel = () => {
    setVisibility(false)
    setName('')
    setTemporalPoint({})
  }

  const handleList = () => {
    setVisibilityFilter('all_points')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleOnLongPress} points={points} pointVisible={pointVisible}/>
      <Panel onPressLeft={handleList} textLeft='List' togglePointVisible={togglePointVisible}/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_point'
          ?
          <View style={styles.form}>
            <Input title='Name' placeholder='Name of point' onChangeText={handleChangeText} />
            <View style={styles.button}>
              <Button style={styles.button} title='Accept' onPress={handleSubmit} />
              <Button style={styles.button} title='Cancel' onPress={handleCancel} />
            </View>
          </View>
          : <List points={points} closeModal={() => setVisibility(false)} />

        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
