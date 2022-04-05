//import liraries
import React, { useState } from "react";
import { Text,View, StyleSheet, Button } from "react-native";
import { strings } from "../../locale/strings";
import supportedLanguage from "../../locale/supportedLang";
import { changeLaguage, getCurrentDispledLaguage } from "../../utils/utils";
import { useTheme } from '@react-navigation/native';


// create a component
const SettingsScreen = () => {
    const { colors } = useTheme();
    const currentLang = getCurrentDispledLaguage()
    const [language, setLanguage] = useState(currentLang);
    const onChnageLang =(lang:string)=>{
        setLanguage(lang)
        changeLaguage(lang)
    }
    return (
        <View style={styles.container}>
            <Text style = {styles.title}
            >{strings.selectLanguage} </Text>
            <Button 
                color={(language == supportedLanguage.Ar)?colors.btnActive:colors.btnInactive}
                onPress={()=>{
                    onChnageLang(supportedLanguage.Ar)
            }} title = {strings.arabic}/> 
            <Button 
            color={(language == supportedLanguage.En)?colors.btnActive:colors.btnInactive}
            onPress={()=>{
               onChnageLang(supportedLanguage.En)
            }} title= {strings.english}/> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginVertical: 16,
        alignSelf:"center"
    },
});

//make this component available to the app
export default SettingsScreen;
