import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";
import { Dimensions } from "../../constants/dimension";


const createStyle = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: RFValue(Dimensions[24]),
            fontWeight: '300',
            color: Colors.BLACK
        },
        background: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            objectFit: 'cover'
        },
        logo: {
            width: RFValue(100),
            height: RFValue(100)
        }

    })

export default createStyle;