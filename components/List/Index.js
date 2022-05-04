import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { colors } from '../../content/Colors'

const List = ({handleModal, todoList}) => {

    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item}></TodoItem>
    
    return (
        <View style={styles.itemList}>
            {todoList.length !== 0 && (
                <FlatList
                    data={todoList}
                    keyExtractor={todo => todo.id}
                    renderItem={renderTodo}
                />
            )}

            {todoList.length === 0 && <Text style={styles.textEmpty}>No hay todos cargados</Text>}

        </View>
    )
}

export default List

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.background,
        width: '100%',
        padding: 20,
        flex: 0.9,
        borderRadius: 10
    },
    textEmpty:{
        color: colors.light,
        fontSize: 18
    }
})