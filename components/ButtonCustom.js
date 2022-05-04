import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from '../content/Colors'; 
const ButtonCustom = ({text, onPress}) =>{
    return (
        <TouchableOpacity style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        padding: 5,
        borderRadius:10,
        borderWidth:2,
       flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        color: colors.dark
    }
})