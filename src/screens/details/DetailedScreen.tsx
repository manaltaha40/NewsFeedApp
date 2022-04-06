//import liraries
import React from 'react';
import { Text ,Image , StyleSheet, ScrollView, Alert} from 'react-native';
import UnavailableImage from '../../assets/unavailable.png'
import { checkVaildUrl } from '../../utils/utils';
import { News } from '../../models/News';
import { formatDate } from '../../utils/utils';
import { isCanOpenTheUrl, openURL } from '../../utils/utils';
import { useTheme } from '@react-navigation/native';
import { strings } from '../../locale/strings';


// create a component
const DetailedScreen = ({route}) => {
    const { colors } = useTheme();
    const artical:News = route?.params?.paramKey
    const openLinkError= `${strings.openLinkError} ${artical?.articalLink}`


    return (
        <ScrollView style = {[styles.root,{backgroundColor:colors.background}]}>
             {checkVaildUrl(artical?.imageUrl) ? 
             (<Image 
                source ={{ uri: artical?.imageUrl}}
                style={styles.image}/>) : 
            (<Image 
                source ={ UnavailableImage}
                style={styles.image}/>)}
             <Text
                style ={[styles.title,{color:colors.textColor}]}>
               {artical?.title}
            </Text>
            {artical?.publishedAt?( <Text
                style ={[styles.publishAt,{color:colors.hintColor}]}>
               { formatDate(artical?.publishedAt)}
            </Text> ):null}  
            
            {artical?.description?(<Text
                style ={[styles.discription,{color:colors.textColor}]}>
               {artical?.description}
            </Text>): null}
            
            {artical?.author?( <Text
                style ={[styles.author,{color:colors.textColor}]}>
            {strings.AuthorName}{artical?.author}
            </Text>  ): null} 
            {artical?.articalLink?
            (<Text style ={{color:colors.textColor , marginVertical:8}}>
                {strings.articalLinkText}
                <Text
                    style ={[styles.link,{color:colors.linkColor}]}
                    onPress = {()=>{
                        isCanOpenTheUrl(artical?.articalLink).then(supported => {
                            if(supported)
                                openURL(artical?.articalLink)
                            else
                            Alert.alert(openLinkError);

                        }).catch(error => {
                            Alert.alert(openLinkError);
                        })
                        
                        }}>
                    { artical?.articalLink}
                </Text> 
            </Text>  
            ): null} 
            {artical?.sourceName?
            ( <Text
                style ={[styles.sourceName,{color:colors.textColor}]}>
             {strings.sourceNameText}{artical?.sourceName}
            </Text>  ): null} 
        
             
          
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingStart:8,
        paddingEnd:8,
        paddingBottom:8
        
    },
    image:{
        width:'100%',
        height:300,
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
        textDecorationLine: 'underline'
    },
    sourceName:{
        fontSize:14,
        fontWeight:'bold',
        marginVertical:8
    }

    
});

//make this component available to the app
export default DetailedScreen;
