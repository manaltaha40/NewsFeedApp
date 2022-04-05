//import liraries
import React, { useState } from "react";
import { Text,View, StyleSheet, Button } from "react-native";
import { strings } from "../../locale/strings";
import supportedLanguage from "../../locale/supportedLang";
import { changeLaguage, getCurrentDispledLaguage } from "../../utils/utils";
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'


// create a component
const SettingsScreen = () => {
    const {navigate} = useNavigation();
    const { colors } = useTheme();
    const currentLang = getCurrentDispledLaguage()
    const [language, setLanguage] = useState(currentLang);
    return (
        <View style={styles.container}>
            <Text style = {styles.title}
            >{strings.selectLanguage} </Text>
            <Button 
                color={(language == supportedLanguage.Ar)?colors.btnActive:colors.btnInactive}
                onPress={()=>{
                    setLanguage(supportedLanguage.Ar)
                    changeLaguage(supportedLanguage.Ar)
                    navigate.goBack();
              
            }} title = {strings.arabic}/> 
            <Button 
            color={(language == supportedLanguage.En)?colors.btnActive:colors.btnInactive}
            onPress={()=>{
                setLanguage(supportedLanguage.En)
                changeLaguage(supportedLanguage.En)
                navigate.goBack();
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
