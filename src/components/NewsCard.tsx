//import liraries
import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet, Image ,Dimensions} from 'react-native';
import { News } from '../data/Interfaces';
import UnavailableImage from '../assets/unavailable-img.png'
import { checkVaildUrl } from '../utils/StringUtils';

type NewsCardProps = {
 item:News
}
const {height} = Dimensions.get('window')
const NewsCard:React.FC<NewsCardProps> = ({item}) => {
    return (
        <View style={styles.container}>
             {checkVaildUrl(item.imageUrl) ? 
             (<Image 
                source ={{ uri: item.imageUrl}}
                style={styles.cradImage}/>) : 
            (<Image 
                source ={ UnavailableImage}
                style={styles.cradImage}/>)}
          
            <Text
                style ={styles.title}>
               {item.title}
            </Text> 
            <Text
                style ={styles.publishAt}>
               {moment(item.publishedAt).format('LLL')}
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
    cradImage:{
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
