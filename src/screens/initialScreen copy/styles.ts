import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";
import { Dimensions } from "../../constants/dimension";


const createStyle=()=>
    StyleSheet.create({
        body:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontSize:Dimensions[24],
            fontWeight:'300',
            color:Colors.BLACK
        }

    })

export default createStyle;