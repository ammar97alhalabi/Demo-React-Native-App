import React from "react";
import { StatusBar, View } from "react-native";
import 'react-native-gesture-handler';
import Screens from "./navigation/AppNavigation";
export default function App(){
    return(
        <View style={{flex:1}}>
            {/* <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true}></StatusBar> */}
            <Screens></Screens>
        </View>
    )
}