import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import UserCard from '../components/UserCard'
import Wrapper from '../components/Wrapper'
import {useDispatch, useSelector} from "react-redux";
import { getUser } from '../../redux/actions/UserAction'
import CreateUser from '../components/CreateUser'

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])
  const {data} = useSelector(state => state.users)

  return (
    <Wrapper>
      <View style={styles.container}>
        <FlatList
        style={styles.flat}
        data={data.users}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem = {({item}) => <UserCard item={item} />}
        keyExtractor={(item) => item.phone}
        />
        <CreateUser />
      </View>
    </Wrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#96ACB4",
  },
  flat:{
    flex:1,
    margin:20,
    marginTop:30,
  }
})
