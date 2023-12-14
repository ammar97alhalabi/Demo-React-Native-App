import React from "react";

import { InitialScreen, InitialScreenCopy } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routeNames";



const MainStack = createStackNavigator();
export default function Screens() {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false, }}>
                <MainStack.Screen name={Routes.INIT} component={InitialScreen} />
                <MainStack.Screen name={Routes.INITCopy} component={InitialScreenCopy} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}