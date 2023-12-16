import React, { FC, useMemo, useState } from "react";
import { Image, View } from "react-native";
import createStyle from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import Button from "../../components/button/Button";
import UserViewModel from "./ViewModel";
import TextField from "../../components/textField/TextField";
import { Dimensions } from "../../utils/constants/AppDimension";
import { Routes } from "../../navigation/routeNames";

interface InitialScreenProps {
    navigation: NavigationProp<ParamListBase>,
}

const InitialScreen: FC<InitialScreenProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyle(), [])

    const userViewModel = new UserViewModel();

    const handleUpdateUser = async () => {
        await userViewModel.login(email, password);
        setVaild(userViewModel.valid)
        if(userViewModel.valid){
            navigation.navigate(Routes.INITCopy)
        }
    };
    const [valid,setVaild]=useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.background}>
                {/* <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}> */}
                <TextField placeHolder="Email" value={email} onChangeValue={(val) => setEmail(val)} secure={false} valid={valid} fieldStyle={{marginBottom:Dimensions[16]}}></TextField>
                
                <TextField placeHolder="Password" value={password} onChangeValue={(val) => setPassword(val)}  secure={true} valid={valid} fieldStyle={{marginBottom:Dimensions[24]}}></TextField>
                <Button title={'Login'} disabled={false} onTap={() => handleUpdateUser()} ></Button>
                {/* </ImageBackground> */}
            </View>
        </View>
    )
}
export default InitialScreen;


