import React from 'react';
import { Pressable,View, Text, StyleSheet } from 'react-native';

type EmptyViewProps = {
    emptyViewText:string
   }
// create a component
const EmptyView :React.FC<EmptyViewProps> = ({emptyViewText}) => {
    return (
        <View style= {styles.emptyView}>
        <Text style={styles.emptyText}>
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