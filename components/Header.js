import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import ButtonCustom from './ButtonCustom';
import { colors } from '../content/Colors';

const Header = ({handleAdd}) => {

    const [input, setInput] = React.useState("");

    const handleAddAux = () => {
        if (input !== ""){
            handleAdd(input)
            setInput("");
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add todo"
                onChangeText={setInput}
                value={input}
            />
            <ButtonCustom onPress={()=> handleAddAux()} text={'Agregar'}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        flex: 0.1,
        backgroundColor : colors.background,
        marginBottom: 1,
        borderRadius: 10
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
       flex:1,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.secondary,
        color: colors.dark
    },
})