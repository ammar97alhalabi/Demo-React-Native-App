import { StyleSheet } from "react-native";
import { Dimensions } from "../../utils/constants/AppDimension";
import { Colors } from "../../utils/constants/AppColors";

const CreateStyle = () => StyleSheet.create({
    button: {
        paddingVertical: Dimensions[12],
        paddingHorizontal: Dimensions[16],
        height: Dimensions[48],
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '100%', 
        flexDirection: "row",
        rowGap: Dimensions[12],
        alignSelf: 'center',
        borderRadius: Dimensions[8],
        backgroundColor: Colors.PRIMARY.shade500
    },
    text: {
        fontSize: Dimensions[16],
        fontWeight: '400',
        color: Colors.WHITE,
    }
})

export default CreateStyle;