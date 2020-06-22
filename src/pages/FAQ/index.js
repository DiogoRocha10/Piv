import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native'


export default function FAQ(props) {
    const { navigation } = props

    return (
        <TouchableOpacity   
            style={{ alignItems: "flex-start", marginTop: 50 }}>
            <Icon name="reorder" size={50} color="black" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        </TouchableOpacity>
    )
}