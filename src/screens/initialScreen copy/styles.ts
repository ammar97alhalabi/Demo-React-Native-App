import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../utils/constants/AppColors";
import { Dimensions } from "../../utils/constants/AppDimension";


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
            color:Colors.PRIMARY.shade700
        }

    })

export default createStyle;