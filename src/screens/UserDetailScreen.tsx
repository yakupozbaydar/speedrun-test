import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wrapper from '../components/Wrapper'
import { useRoute } from '@react-navigation/native'

const UserDetailScreen = () => {
  const route = useRoute()
  const item = route.params
  return (
    <Wrapper>
      <View style={styles.container}>
        <Image style={{ width: 300, height: 400, marginTop: -200,alignSelf:"center" }} source={{ uri: item.image }} />
        <Text style={styles.text}>{item.firstName} {item.lastName}</Text>
        <View style={styles.infoView}>
          <Text style={styles.info}>Age:{item.age}</Text>
          <Text style={styles.info} >Adress:{item.company.address.address}</Text>
          <Text style={styles.info}>City:{item.company.address.city}</Text>
          <Text style={styles.info}>Postal Code:{item.company.address.postalCode}</Text>
        </View>
      </View>

    </Wrapper>
  )
}

export default UserDetailScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
  },
  text: {
    alignSelf:"center",
    marginTop: 30,
    fontSize: 32,
  },
  infoView:{
    justifyContent:"flex-start"
  },
  info:{
    padding:10,
    marginLeft:10,
    fontSize:18,
    fontWeight:"500",
  }
})