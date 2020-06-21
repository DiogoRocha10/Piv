import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native'
import { Container } from './styles'


export default function Mapa(props) {
    const { navigation } = props
    return (
        <TouchableOpacity   
            style={{ alignItems: "flex-start", marginTop: 50 }}>
            <Icon name="reorder" size={50} color="blue" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
