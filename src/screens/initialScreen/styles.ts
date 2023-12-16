import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../utils/constants/AppColors";
import { Dimensions } from "../../utils/constants/AppDimension";


const createStyle = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding:Dimensions[16]
        },
        text: {
            fontSize: RFValue(Dimensions[24]),
            fontWeight: '300',
        },
        background: {
            height: '100%',
            width: '100%',
            marginHorizontal:Dimensions[16],
            alignItems: 'center',
            objectFit: 'fill'
        },
        logo: {
            width: RFValue(100),
            height: RFValue(100)
        }

    })

export default createStyle;