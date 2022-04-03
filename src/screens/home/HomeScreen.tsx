import { Alert, SafeAreaView,StyleSheet, ActivityIndicator  } from 'react-native'
import React , { useEffect, useState }from 'react'
import SearchBar from '../../components/SearchBar'
import NewsList from '../../components/NewsList'
import { getNewsService } from '../../api/GetNewsService'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'
import Routes from '../../navigation/Routes'


const HomeScreen = () => {
  const placeholder:string = 'Search here ..'
  const newsListTitle:string = 'Global News :'
  const [newsData, setNewsData] = useState([])
  const {navigate} = useNavigation();
  useEffect(() => {
   getNewsService('general')
        .then(data => {
            setNewsData(data)
        })
        .catch(error => {
            Alert.alert(error)
        })
}, [])  

  return (
    <SafeAreaView style = {styles.root}>
    <SearchBar searchPlaceHolder ={placeholder}/>
    {newsData.length > 1 ?
     (<NewsList 
        title= {newsListTitle}
        data={newsData} 
        onPress={(item) => {
         navigate(Routes.DetailedScreen,{
          paramKey: item,
        });
        }}
    /> ) : (
          <ActivityIndicator size="large" />)}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create(
  {
      root: {
          flex:1,
          backgroundColor: Colors.appBackground,
          paddingStart:8,
          paddingEnd:8
      }
}
  
)

export default HomeScreen