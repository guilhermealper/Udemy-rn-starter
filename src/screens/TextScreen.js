import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    return(
        <View>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            />
            {name.length<5 ? <Text>o nome deve ter pelo menos 5 caracteres</Text> : null}
            
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:"#000",
        borderWidth: 1
    }
})
export default TextScreen;