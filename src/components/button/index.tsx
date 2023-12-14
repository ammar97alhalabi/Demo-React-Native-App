import React, { FC, useMemo } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewProps, ViewStyle } from "react-native";
import CreateStyle from "./styles";
import { Colors } from "../../constants/color";


interface ButtonProps {
    title: string
    onTap?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}
const Button: FC<ButtonProps> = (props) => {
    const styles = useMemo(() => CreateStyle(), [])
    return (
        <Pressable onPress={props.onTap} disabled={props.disabled} style={[styles.button, { backgroundColor: props.disabled ? Colors.GREY : Colors.ORANGE }, props.buttonStyle]}>
            <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </Pressable>
    )
}
export default Button;