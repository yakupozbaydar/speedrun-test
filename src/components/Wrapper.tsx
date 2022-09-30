import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type WrapperProps = {
    children:JSX.Element,
}

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <View style={styles.generalContainer}>
      {children}
    </View>
  )
}

export default Wrapper

const styles = StyleSheet.create({
    generalContainer:{
        backgroundColor:"#96ACB4",
        flex:1,
    }
})