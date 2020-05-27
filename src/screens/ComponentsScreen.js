import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Guilherme';
    return (
        <View>
            <Text style={styles.text2}>My name is {name} and this is the components screen</Text>

        </View>
    )
};


const styles = StyleSheet.create({
    text1:{
        fontSize:45
    },

    text2:{
        fontSize:40
    }
});

export default ComponentsScreen;