//import liraries
import React from 'react';
import { Pressable,View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

type ErrorViewProps = {
    errorViewText:string
    errorViewBtnText:string
    onRetry:()=>void
   }
// create a component
const ErrorView :React.FC<ErrorViewProps> = ({errorViewText,errorViewBtnText,onRetry}) => {
    return (
        <View style={styles.errorView}>
            <Text style={styles.errorText}>
         {errorViewText}
        </Text>
        <Pressable
           onPress={onRetry}
           style={styles.errorViewBtn}>
        <Text
            style={styles.errorViewBtnText}>
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
      errorText:{
        fontSize: 18,
        color:Colors.redColor,
        textAlign: 'center'
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
        color: Colors.redColor,
      },
    
});

//make this component available to the app
export default ErrorView;
