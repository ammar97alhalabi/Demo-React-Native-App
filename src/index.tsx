import React from "react";
import { View } from "react-native";
import 'react-native-gesture-handler';
import Screens from "./navigation";
export default function App(){
    return(
        <View style={{flex:1}}>
            <Screens></Screens>
        </View>
    )
}