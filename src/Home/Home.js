import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default (props) => {
  const {count, scene, incrementCount, decrementCount, incrementCountThunk} = props
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You are currently on {scene && scene.sceneKey}</Text>
      <Text>Count: {count}</Text>
      <Text onPress={()=>incrementCount()}>Increment Count</Text>
      <Text onPress={()=>incrementCountThunk()}>Increment Count Thunk</Text>
      <Text onPress={()=>decrementCount()}>Decrement Count</Text>
    </View>
  )
}
