import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'

type UserCardProps = {
  name: string,
  age: string,
  image: undefined,

}

const UserCard = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("UserDetailScreen" as never, item as never)} style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{ uri: item.image }} style={{ width: SCREEN_WIDTH/3, height: SCREEN_HEIGHT/5 }} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
      </View>
      <View style={styles.ageView}>
        <Text style={styles.age}>{item.age}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserCard

const styles = StyleSheet.create({
  container: {
    margin:5,
    width: 175,
    backgroundColor: "#54A356",
    height: SCREEN_HEIGHT / 4,
    borderRadius: 30,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  nameView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom:-15,
  },
  ageView: {
    marginBottom:5,
    justifyContent: "center",
    alignItems: "center",
  },
  name:{
    fontSize:16,
    fontWeight:"700",
  },
  age:{
    fontSize:14,
    fontWeight:"300",
  }

})