import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/Dimensions'

const CustomInput = ({placeholder,setText}) => {
  return (
      <TextInput
      autoCorrect={false}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={(input)=> setText(input)}/>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input:{
    width:SCREEN_WIDTH*9/10,
    height:SCREEN_HEIGHT/20,
    backgroundColor:"#DDDDDD",
    margin:15,
    padding:10,
    borderRadius:20,
  }
})