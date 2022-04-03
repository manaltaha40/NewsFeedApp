import { Alert, SafeAreaView,StyleSheet, ActivityIndicator  } from 'react-native'
import React , { useEffect, useState }from 'react'
import SearchBar from '../../components/SearchBar'
import NewsList from '../../components/NewsList'
import { getNewsService } from '../../api/GetNewsService'


const HomeScreen = () => {
  const placeholder:string = 'Search here ..'
  const newsListTitle:string = 'Global News :'
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
   getNewsService('general')
        .then(data => {
            setNewsData(data)
        })
        .catch(error => {
            Alert.alert(error)
        })
}, [])
if (newsData)
  console.log(newsData);
  
  return (
    <SafeAreaView style = {styles.root}>
    <SearchBar searchPlaceHolder ={placeholder}/>
    {newsData.length > 1 ?
     (<NewsList title= {newsListTitle} data={newsData}/> ) : (
                    <ActivityIndicator size="large" />)}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create(
  {
      root: {
          flex:1,
          backgroundColor: '#DEE0E4',
          paddingStart:8,
          paddingEnd:8
      }
}
  
)

export default HomeScreen