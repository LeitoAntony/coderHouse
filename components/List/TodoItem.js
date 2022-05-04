import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../content/Colors";

const TodoItem = ({todo, onPress}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
            onPress={()=>onPress(todo)}
            >
            <Text 
            style={styles.text}>{todo.todo}
            </Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoItem;

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: colors.primary,
        borderRadius:10,
        padding:10,
        marginBottom: 10
    },
    text:{
        color:colors.light, 
        fontSize:18
    }
})