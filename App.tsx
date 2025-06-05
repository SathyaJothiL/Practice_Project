import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import SplashScreen from 'react-native-splash-screen'

const App = () => {
  // useEffect(()=>{
  //   if(Platform.OS==='android') SplashScreen.hide()
  // },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'red'}}>Oh my god...git modified</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})