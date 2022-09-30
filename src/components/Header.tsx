import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/Dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
    title:string,
}

const Header:React.FC<HeaderProps> = ({title}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.inner}>
                <View style={styles.tab}>
                    <TouchableOpacity onPress={() => navigation.goBack() } style={styles.button}>
                        <Ionicons name='caret-back-sharp' size={32} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </SafeAreaView>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "#DDDDDD",
        height: SCREEN_HEIGHT / 10,
    },
    inner: {
        alignItems:"center",
        flexDirection: "row",
    },
    button: {
        flex:1,
        marginLeft:SCREEN_WIDTH/25,
    },
    tab: {
        flex: 1/2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText:{
        fontWeight:"700",
        fontSize:20,
    }
})