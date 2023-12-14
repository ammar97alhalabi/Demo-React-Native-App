import { StyleSheet } from "react-native";
import { Dimensions } from "../../constants/dimension";

const CreateStyle=()=>StyleSheet.create({
    button:{
        width:'70%',
        height:Dimensions[40],
        alignItems:'center',
        borderRadius:Dimensions[4]
    },
    text:{
        fontSize:Dimensions[24],
        fontWeight:'500',
        
    }
})

export default CreateStyle;