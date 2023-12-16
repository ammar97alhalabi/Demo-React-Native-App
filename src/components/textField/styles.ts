import { StyleSheet, processColor } from "react-native";
import { Dimensions } from "../../utils/constants/AppDimension";
import { Colors } from "../../utils/constants/AppColors";

const CreateStyle = () => StyleSheet.create({
    textField: {
        height: Dimensions[48],
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.ON_SURFACE_38,
        borderRadius: Dimensions[8],
    }, 
    textFieldFocus: {
        height: Dimensions[48],
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.PRIMARY.shade500,
        borderRadius: Dimensions[8],
    }, 
    textFieldError: {
        height: Dimensions[48],
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: Dimensions[8],
    }, 
    input: {
        flex: 1,
        padding: Dimensions[12],
        color: Colors.ON_SURFACE,
        fontSize: Dimensions[16],
        fontWeight: '400'

    }
})

export default CreateStyle;