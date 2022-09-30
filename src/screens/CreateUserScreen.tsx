import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import CustomInput from '../components/CustomInput'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/actions/UserAction'

const CreateUserScreen = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [imageURL, setImageURL] = useState("")
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.inputContainer}>
          <CustomInput placeholder={"First Name"} setText={setFirstName} />
          <CustomInput placeholder={"Last Name"} setText={setLastName} />
          <CustomInput placeholder={"Company"} setText={setCompany} />
          <CustomInput placeholder={"Image URL"} setText={setImageURL} />
        </View>
        <Button onPress={() => { }} />
      </KeyboardAvoidingView>
    </Wrapper>
  )
}

export default CreateUserScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  }
})