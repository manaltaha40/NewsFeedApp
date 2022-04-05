//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image ,Dimensions} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { News } from '../data/Interfaces';
import UnavailableImage from '../assets/unavailable.png'
import { checkVaildUrl } from '../utils/utils';
import { formatDate } from '../utils/utils';

type NewsCardProps = {
 item:News
 onPress:()=>void
}
const {height} = Dimensions.get('window')
const NewsCard:React.FC<NewsCardProps> = ({item,onPress}) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container,{backgroundColor:colors.card}]}>
             {checkVaildUrl(item.imageUrl) ? 
             (<Image 
                source ={{ uri: item.imageUrl}}
                style={styles.cardImage}/>) : 
            (<Image 
                source ={ UnavailableImage}
                style={styles.cardImage}/>)}
          
            <Text
                style ={[styles.title,{color:colors.textColor}]}
                numberOfLines ={2}
                onPress = {onPress}>
               {item.title}
            </Text> 
            <Text
                style ={[styles.publishAt,{color:colors.hintColor}]}>
               {formatDate(item.publishedAt)}
            </Text> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height:height/3,
        borderRadius:16,
        paddingHorizontal:4,
        paddingVertical:4,
        marginBottom:16
      
    },
    cardImage:{
        width:'100%',
        height:'60%',
        resizeMode:'cover',
        borderRadius:16
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginTop: 8
    },
    publishAt:{
        fontSize:14,
        marginTop: 4
    }
});

//make this component available to the app
export default NewsCard;
