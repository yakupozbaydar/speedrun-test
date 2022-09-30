import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/Dimensions'

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress} style={styles.container}>
        <Text style={styles.text}>Create</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:{
    width:SCREEN_WIDTH/3,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    height:SCREEN_HEIGHT/12,
    backgroundColor:"#54A356"

  },
  text:{
    fontSize:18,
    fontWeight:"700",
  }
})