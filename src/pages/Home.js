import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = (props) => {
    const { navigation } = props
    const { route } = props
    const { usuario } = route.params
    return (
        <View>
            <Text>Seja Bem-Vindo {usuario} </Text>

            <Button
                title="Logoff"
                onPress={() => navigation.replace("Login")}
                color="red"
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
