//import liraries
import React from 'react';
import { Text ,Image , StyleSheet ,SafeAreaView, ScrollView, Alert} from 'react-native';
import Colors from '../../utils/Colors';
import UnavailableImage from '../../assets/unavailable-img.png'
import { checkVaildUrl } from '../../utils/StringUtils';
import { News } from '../../data/Interfaces';
import { formatDate } from '../../utils/DateUtils';
import { isCanOpenTheUrl, openURL } from '../../utils/NavigationUtils';


// create a component
const DetailedScreen = ({route}) => {
    const artical:News = route.params.paramKey
    const authorNameText= `Author Name: ${artical.author}`
    const sourceNameText= `Published in : ${artical.sourceName}`
    const articalLinkText= `For more information visit the original link : `
    const openLinkError= `Don't know how to open this URL: ${artical.articalLink}`
console.log(artical);

    return (
        <ScrollView style = {styles.root}>
             {checkVaildUrl(artical.imageUrl) ? 
             (<Image 
                source ={{ uri: artical.imageUrl}}
                style={styles.image}/>) : 
            (<Image 
                source ={ UnavailableImage}
                style={styles.image}/>)}
             <Text
                style ={styles.title}>
               {artical.title}
            </Text>  
            <Text
                style ={styles.publishAt}>
               { formatDate(artical.publishedAt)}
            </Text>  
            <Text
                style ={styles.discription}>
               {artical.description}
            </Text> 
            {artical.author?( <Text
                style ={styles.author}>
             { authorNameText}
            </Text>  ): null} 
            {artical.articalLink?
            (<Text>
                {articalLinkText}
                <Text
                    style ={styles.link}
                    onPress = {()=>{
                        isCanOpenTheUrl(artical.articalLink).then(supported => {
                            if(supported)
                                openURL(artical.articalLink)
                            else
                            Alert.alert(openLinkError);

                        }).catch(error => {
                            Alert.alert(openLinkError);
                        })
                        
                        }}>
                    { artical.articalLink}
                </Text> 
            </Text>  
            ): null} 
            {artical.sourceName?
            ( <Text
                style ={styles.sourceName}>
             {sourceNameText}
            </Text>  ): null} 
        
             
          
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.appBackground,
        paddingStart:8,
        paddingEnd:8,
        paddingBottom:8
        
    },
    image:{
        width:'100%',
        height:250,
        resizeMode:'cover',
    },
    title:{
        fontWeight:'bold',
        fontSize:22,
        marginVertical:8
    },
    publishAt:{
        fontSize:14,
        marginTop: 8,
        color:Colors.hintColor,
        alignSelf:'flex-end'
    },
    discription:{
        fontSize:18,
        marginTop:8,
        marginBottom:32
       
    },
    author:{
        fontSize:14,
        fontWeight:'bold',
        marginVertical:8
    },
    link:{
        fontSize:14,
        color:Colors.hintColor ,
        
    },
    sourceName:{
        fontSize:14,
        fontWeight:'bold',
        marginVertical:8
    }

    
});

//make this component available to the app
export default DetailedScreen;
