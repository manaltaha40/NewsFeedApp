//import liraries
import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';


type TapBarIconProps ={
    source:ImageSourcePropType
}
// create a component
const TapBarIcon : React.FC<TapBarIconProps> = ({source}) => {
    return (
        <View>
            <Image
                source={source}
                style={styles.tapBarIcon}
            />
      </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    tapBarIcon:{ 
        width: 40 ,
        resizeMode:"contain"
    }
});

//make this component available to the app
export default TapBarIcon;
