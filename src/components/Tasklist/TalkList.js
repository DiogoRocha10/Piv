import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import { Container } from './styles'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

export default function TaskList({ data, deleteItem, editItem }) {
    return (
        <Container>
            <TouchableOpacity style={{marginRight: 10 }} onPress={ () => deleteItem(data.key)}>
                <Icon name="delete" color="#fff" size={20} />
            </TouchableOpacity>

            <View style={{paddingRight: 15}}>
                <TouchableWithoutFeedback onPress={() => editItem(data)}>
                    <Text style={{color:'#fff', paddingRight: 10}}>{data.nome}</Text>
                </TouchableWithoutFeedback>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({})
