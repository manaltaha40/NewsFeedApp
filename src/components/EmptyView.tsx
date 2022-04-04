import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';


type EmptyViewProps = {
    emptyViewText:string
   }
// create a component
const EmptyView :React.FC<EmptyViewProps> = ({emptyViewText}) => {
  const { colors } = useTheme();
    return (
        <View style= {styles.emptyView}>
        <Text style={[styles.emptyText,{color:colors.textColor}]}>
          {emptyViewText}
        </Text>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    emptyView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
      },
      emptyText:{
        fontSize: 18,
        textAlign: 'center'
      }
});

//make this component available to the app
export default EmptyView;