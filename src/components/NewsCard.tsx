//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image ,Dimensions} from 'react-native';
import { News } from '../data/Interfaces';
import UnavailableImage from '../assets/unavailable-img.png'
import { checkVaildUrl } from '../utils/StringUtils';
import { formatDate } from '../utils/DateUtils';

type NewsCardProps = {
 item:News
 onPress:()=>void
}
const {height} = Dimensions.get('window')
const NewsCard:React.FC<NewsCardProps> = ({item,onPress}) => {
    return (
        <View style={styles.container}>
             {checkVaildUrl(item.imageUrl) ? 
             (<Image 
                source ={{ uri: item.imageUrl}}
                style={styles.cardImage}/>) : 
            (<Image 
                source ={ UnavailableImage}
                style={styles.cardImage}/>)}
          
            <Text
                style ={styles.title}
                numberOfLines ={3}
                onPress = {onPress}>
               {item.title}
            </Text> 
            <Text
                style ={styles.publishAt}>
               {formatDate(item.publishedAt)}
            </Text> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height:height/3,
        backgroundColor: 'white',
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
        marginTop: 8,
        color:'#656060'
    }
});

//make this component available to the app
export default NewsCard;
