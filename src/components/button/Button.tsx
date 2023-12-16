import React, { FC, useMemo } from "react";
import {  Image, Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import CreateStyle from "./styles";
import { Colors } from "../../utils/constants/AppColors";
import { Dimensions } from "../../utils/constants/AppDimension";


interface ButtonProps {
    title: string
    onTap?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    suffixIcon?: string
    prefixIcon?: string
}
const Button: FC<ButtonProps> = (props) => {
    const styles = useMemo(() => CreateStyle(), [])
    return (
        <Pressable  onPress={props.onTap} disabled={props.disabled} style={[styles.button, { backgroundColor: props.disabled ? Colors.ON_SURFACE : Colors.PRIMARY.shade500 }, props.buttonStyle]}>
            {props.prefixIcon != null ?
                <Image source={props.prefixIcon} style={{marginRight:Dimensions[8]}}></Image> :
                null}
            <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
            {props.suffixIcon != null ?
                <Image source={props.suffixIcon} style={{marginLeft:Dimensions[8]}}></Image>:
                null}
        </Pressable>
    )
}
export default Button;    