//import liraries
import React, {useState ,useEffect} from 'react';
import { View, Image , StyleSheet } from 'react-native';
import { strings } from '../../locale/strings';
import AppNavigation from '../../navigation/AppNavigation';
import { getData } from '../../storage/AsyncStorage';
import LogoImage from '../../assets/logo.png'
// create a component
const SplashScreen = () => {
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        getData('lang').then((value)=>{
          if(value.length>0)
           strings.setLanguage(value)
           setTimeout(function(){  
            setIsInitialized(true) 
          }, 2000);  
          
        })
      })
    return (
       <>
         {isInitialized? (<AppNavigation/>):(<View style={[styles.splashRootView]}>  
                <Image source={LogoImage}  
                    style={styles.splashImg} />  
             </View> )}
       </>
       
    );
};

// define your styles
const styles = StyleSheet.create({
   splashRootView:{
    justifyContent: 'center',  
    flex:1,  
   },
   splashImg:{
    width:'100%', 
    height: '100%', 
    resizeMode: 'contain'
   }
});

//make this component available to the app
export default SplashScreen;
