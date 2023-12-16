import React, { FC, useMemo, useState } from "react";
import { Image, KeyboardTypeOptions, StyleProp, Touchable, TouchableOpacity, View, ViewStyle } from "react-native";
import CreateStyle from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "../../utils/constants/AppColors";
import { Dimensions } from "../../utils/constants/AppDimension";


interface TextFieldProps {
    placeHolder: string
    onTap?: () => void
    enabled?: boolean
    fieldStyle?: StyleProp<ViewStyle>
    keyBoardType?: KeyboardTypeOptions
    suffixIcon?: string
    prefixIcon?: string
    onEnd?:()=>void
    value?:string
    onChangeValue?:(text: string)=>void
    valid?:boolean
    secure?:boolean
}
const TextField: FC<TextFieldProps> = ({placeHolder,onTap,enabled=true,valid=true,onEnd,fieldStyle,keyBoardType,onChangeValue,prefixIcon,suffixIcon,value ,secure=false}) => {
    const styles = useMemo(() => CreateStyle(), [])
    const [focus,setFocus]=useState(false)
    return (
        <TouchableOpacity style={[(valid?(focus? styles.textFieldFocus:styles.textField):styles.textFieldError), fieldStyle]} onPress={()=>setFocus(true)} >
            {prefixIcon != null ?
                <Image source={prefixIcon} style={{ marginHorizontal: Dimensions[8] }} /> :
                null}
            <TextInput secureTextEntry={secure}  onChangeText={onChangeValue} value={value} style={styles.input}  keyboardType={keyBoardType} enabled={enabled} placeholderTextColor={Colors.ON_SURFACE_38} onFocus={()=>setFocus(true)} onEndEditing={()=>{setFocus(false),onEnd}}/>
            {suffixIcon != null ?
                <Image source={suffixIcon} style={{ marginHorizontal: Dimensions[8] }}/> :
                null}
        </TouchableOpacity>
    )
}
export default TextField;