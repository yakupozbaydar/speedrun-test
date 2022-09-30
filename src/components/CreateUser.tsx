import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/Dimensions'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const CreateUser = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CreateUserScreen")} style={styles.button}>
      <Text style={styles.text}>Create User</Text>
      <Ionicons name='add-circle' size={32} />
    </TouchableOpacity>
  )
}

export default CreateUser

const styles = StyleSheet.create({
  button:{
    borderWidth:1,
    position:"absolute",
    width:SCREEN_WIDTH*1/4,
    height:SCREEN_HEIGHT/12,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    bottom:30,
    right:20,
    backgroundColor:"#DDDDDD"
  },
  text:{
    fontSize:14,
    fontWeight:"900"
  }
})