import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import createStyle from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps{
    navigation:NavigationProp<ParamListBase>
}

const InitialScreen: FC<IProps>=({navigation})=>{
    const styles=useMemo(()=>createStyle(),[])
    return(
        <View style={styles.body}>
            <Text style={styles.text}>Hello</Text>
        </View>
    )
}
export default InitialScreen;


