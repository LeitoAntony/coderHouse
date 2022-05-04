import { View, StyleSheet } from 'react-native'
import { useState } from 'react';
import Header from '../components/Header';
import CustomModal from '../components/Modal';
import List from '../components/List/Index';
import { colors } from '../content/Colors';
const Layout = () => {

    const [todoList, setTodoList] = useState([]);
    const [todoSelected, setTodoSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleAdd = (input) => {
        {
            setTodoList([...todoList, { id: Date.now(), todo: input }]);
        }
    }

    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item !== todoSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }

    const handleEdit = (text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id);
        todoToEdit.todo = text
        const todoAux = []
        todoList.forEach((item) => {
            todoAux.push(item)
        })
        setTodoList(todoAux)
    }

    return (
        <View style={styles.container}>
            <Header handleAdd={handleAdd}/>
            <List handleModal={handleModal} todoList={todoList}/>
            <CustomModal
                modalVisible={modalVisible}
                setModalVisible = {setModalVisible}
                handleEdit = {handleEdit}
                handleDelete = {handleDelete}
                todoSelected = {todoSelected}
            />
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.light
    },
})