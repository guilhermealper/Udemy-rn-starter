import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>BoxScreen</Text>
            <Text style={styles.textStyle2}>BoxScreen</Text>
            <Text style={styles.textStyle3}>BoxScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:"#222"
    },

    textStyle:{
        borderWidth:3,
        borderColor:'#159',
        margin:20
    }
});

export default BoxScreen;