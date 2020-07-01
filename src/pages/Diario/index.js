import React, { useState, useEffect, useRef}  from 'react'
import {FlatList, Keyboard, TouchableOpacity, View, Text } from 'react-native'
import { Container, Form, FormInput, SubmitButton } from './styles'
import {firebase} from '../../backend/firebase'

import Icon from 'react-native-vector-icons/MaterialIcons'
import TaskList from '../../components/Tasklist/TalkList'

//desabilitar warnings
console.disableYellowBox=true

export default function Diario()  {

    const inputRef = useRef(null)
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [key, setKey] = useState("")

    //carregar as tarefas do banco
    useEffect(()=> {
      async function loadTasks(){
        await firebase.database().ref('tarefas').on('value', (snapchot)=> {
          setTasks([]);

          snapchot.forEach((childItem)=> {
            let data = {
              key: childItem.key,
              nome: childItem.val().nome
            }

            setTasks(oldArray => [...oldArray, data])
          })

        });
      }
    loadTasks()

  }, [])

    //salvar as tarefas no banco
    async function saveTask(){
      if(newTask !== ''){

        if(key !== ''){
          await firebase.database().ref('tarefas').child(key).update({
            nome: newTask,
          })
          Keyboard.dismiss()
          setNewTask('')
          setKey('')
          return
        }

        let tarefas = await firebase.database().ref('tarefas')
        let chave = tarefas.push().key

        tarefas.child(chave).set({
          nome: newTask
        })

        Keyboard.dismiss();
        setNewTask('')

      }
    }

    //apagar as tarefas no banco
    async function removeTask(key) {
      await firebase.database().ref('tarefas').child(key).remove()
    }

    //editar as tarefas no banco
    function editTask(data){
      setNewTask(data.nome)
      setKey(data.key)
      inputRef.current.focus()
    }

    //cancelar edição
    function cancelEdit(){
      setKey("")
      setNewTask("")
      Keyboard.dismiss()
    }

    return (
      <Container>
        {key.length > 0 && (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginTop: 10}} onPress={cancelEdit}>
            <Icon name="cancel" size={25} color="red" />
          </TouchableOpacity>
          <Text style={{marginLeft: 5 , marginTop:12, color: "red"}}>
            Você está editando! 
          </Text>
        </View>
        )}
        
        <Form>
            <FormInput
                icon="event"
                autoCorrect={true}
                autoCapitalize="none"
                placeholder="Como você está se sentindo hoje?"
                value={newTask}
                onChangeText={texto => setNewTask(texto)}
                ref={inputRef}
            />
            <SubmitButton onPress={saveTask}>
              Adicionar
            </SubmitButton>
        </Form>
        <FlatList
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={ ({ item }) => (
          <TaskList data={item} deleteItem={removeTask} editItem={editTask} />
        )}
        />
      </Container>
    )
}