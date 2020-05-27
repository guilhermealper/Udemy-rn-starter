import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name:'Friend 1', age:'20'},
        {name:'Friend 2', age:'40'},
        {name:'Friend 3', age:'22'},
        {name:'Friend 4', age:'23'},
    ]


    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({item}) =>{
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
                }
            }
        />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 30
    }
})
export default ListScreen;