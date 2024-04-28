import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Shuriken from './components/Shuriken';
import { useEffect, useRef } from 'react';

export default function App() {
  const rotationVal = useRef(new Animated.Value(0)).current
  useEffect(()=>{
    Animated.timing(rotationVal, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  })
  const spin = rotationVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })
  return (
    <View style={styles.container}>
      <Animated.View 
        style={{
          transform: [{rotate: spin}]
        }}
      >
      <Shuriken/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
