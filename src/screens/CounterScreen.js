import React, {useState, useReducer} from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, number:state.number + action.amount}
        case 'decrease':
            return {...state, number:state.number - action.amount}
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer , {number:0})
    return(
        <View>
            <Button 
                onPress={() => dispatch({type:'increase' , amount:1 })}
                title="Increase"/>
            <Button 
                onPress={() => dispatch({type:'decrease' , amount:1 })}
                title="Decrease"/>

                
            <Text>NUMBER: {state.number}</Text>
        </View>
    )
}
export default CounterScreen;