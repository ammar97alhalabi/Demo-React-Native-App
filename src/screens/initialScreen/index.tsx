import React, { FC, useMemo } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import createStyle from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { INITIAL_BACKGROUND, LOGO } from "../../assets";
import Button from "../../components/button";
import { Routes } from "../../navigation/routeNames";

interface InitialScreenProps {
    navigation: NavigationProp<ParamListBase>
}

const InitialScreen: FC<InitialScreenProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyle(), [])
    return (
        <View style={styles.body}>
            <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
                <Image source={LOGO} style={styles.logo}></Image>
                <Button title="hi" disabled={false} onTap={() => navigation.navigate(Routes.INITCopy)} ></Button>
            </ImageBackground>
        </View>
    )
}
export default InitialScreen;


