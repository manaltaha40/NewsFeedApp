//import liraries
import React from 'react';
import { Image ,Pressable,View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ErrorImage from '../assets/error.png'
type ErrorViewProps = {
    errorViewText:string
    errorViewBtnText:string
    onRetry:()=>void
   }
// create a component
const ErrorView :React.FC<ErrorViewProps> = ({errorViewText,errorViewBtnText,onRetry}) => {
    const { colors } = useTheme();
    return (
        <View style={styles.errorView}>
          <Image 
                source ={ ErrorImage}
                style={styles.errorImage}/>
          <Text style={[styles.errorText,{color:colors.textColor}]}>
            {errorViewText}
          </Text>
          <Pressable
            onPress={onRetry}
            style={styles.errorViewBtn}>
            <Text
              style={[styles.errorViewBtnText,{color:colors.redColor}]}>
              {errorViewBtnText}
            </Text>
           </Pressable>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    errorView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      errorImage:{
        width:'100%',
        height:200,
        resizeMode:'cover',
        borderRadius:16
    },
      errorText:{
        fontSize: 18,
        textAlign: 'center',
        marginTop:8
      },

      errorViewBtn: {
        padding: 8,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
      },
      errorViewBtnText: {
        fontWeight:'bold',
        fontSize:18,
      },
    
});

//make this component available to the app
export default ErrorView;
