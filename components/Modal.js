import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../content/Colors';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    handleEdit, 
    todoSelected, 
    handleDelete,
}) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.btnClose} onPress={() => setModalVisible(false)}>
                        <Text style={styles.textClose}>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleEdit}
                        value={todoSelected.todo}
                    />
                    <TouchableOpacity style={styles.btnDeleteAll} onPress={handleDelete}>
                        <Text style={styles.textDeleteAll}>Eliminar todo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 200,
        width: 300,
        backgroundColor: colors.accent,
        borderRadius:10,
        borderWidth:1,
        borderColor: colors.light,
        padding:5
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.primary,
        color: colors.light
    },
    btnClose:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 5

    },
    textClose:{
        backgroundColor: colors.background,
        color: colors.light,
        padding:4,
        borderRadius: 8,
        borderWidth: 2,
    },
    btnDeleteAll:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        flex:1,
        
    },
    textDeleteAll:{
        color: colors.light,
        fontSize: 18
    }
})